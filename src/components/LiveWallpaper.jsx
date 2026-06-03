import { useEffect, useRef } from "react";
import "./LiveWallpaper.css";

export default function LiveWallpaper() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, radius: 150 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle class
    class Particle {
      constructor() {
        this.reset();
        // Distribute initially across the screen height
        this.y = Math.random() * height;
      }

      reset() {
        this.x = Math.random() * width;
        this.y = height + 10;
        this.size = Math.random() * 6 + 2;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = Math.random() * 0.2 - 0.1;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.18 + 0.05;
        this.fadeSpeed = Math.random() * 0.005 + 0.002;
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        this.twinkleFactor = Math.random() * Math.PI;
        
        // 0 = Circle, 1 = 4-pointed Star (Sparkle)
        this.type = Math.random() > 0.4 ? 1 : 0;
        
        // Colors from Femine palette (rose, peach, burgundy)
        const colorPalette = [
          "211, 127, 126", // Muted Rose
          "232, 192, 190", // Soft Peach
          "78, 19, 36",    // Deep Burgundy
        ];
        this.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      }

      update(mouseX, mouseY, mouseRadius) {
        this.y += this.speedY;
        this.x += this.speedX;

        // Twinkle factor
        this.twinkleFactor += this.twinkleSpeed;

        // Fade in when starting, fade out as it climbs top
        if (this.y > height - 100) {
          this.opacity = Math.min(this.maxOpacity, this.opacity + this.fadeSpeed * 2);
        } else if (this.y < 150) {
          this.opacity = Math.max(0, this.opacity - this.fadeSpeed * 1.5);
        } else {
          // Normal twinkle amplitude
          const twinkle = Math.sin(this.twinkleFactor) * 0.03;
          this.opacity = Math.max(0.01, Math.min(this.maxOpacity, this.opacity + twinkle));
        }

        // Repel from mouse cursor
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouseRadius) {
          const force = (mouseRadius - distance) / mouseRadius;
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * force * 1.8;
          this.y += Math.sin(angle) * force * 1.8;
        }

        // Reset if out of bounds or completely faded
        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
        }
      }

      draw(c) {
        c.save();
        c.globalAlpha = this.opacity;
        c.fillStyle = `rgb(${this.color})`;

        if (this.type === 0) {
          // Draw soft circle
          c.beginPath();
          c.arc(this.x, this.y, this.size / 2, 0, Math.PI * 2);
          c.fill();
        } else {
          // Draw 4-pointed Star (Sparkle)
          const s = this.size * 1.8;
          c.beginPath();
          c.moveTo(this.x, this.y - s);
          c.quadraticCurveTo(this.x, this.y, this.x + s, this.y);
          c.quadraticCurveTo(this.x, this.y, this.x, this.y + s);
          c.quadraticCurveTo(this.x, this.y, this.x - s, this.y);
          c.quadraticCurveTo(this.x, this.y, this.x, this.y - s);
          c.closePath();
          c.fill();
        }
        c.restore();
      }
    }

    // Initialize particles
    const particleCount = Math.min(65, Math.floor((width * height) / 22000));
    const particles = Array.from({ length: particleCount }, () => new Particle());

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Loop
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update(
          mouseRef.current.x,
          mouseRef.current.y,
          mouseRef.current.radius
        );
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(tick);
    };
    tick();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="live-wallpaper-canvas" aria-hidden="true" />;
}
