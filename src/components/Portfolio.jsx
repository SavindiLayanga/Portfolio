import { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import saviLogo from "../assets/images/savi-logo.png";
import savindiPhoto from "../assets/images/savindi-photo.png";
import savindiExpertise from "../assets/images/savindi-expertise.png";
import projectVeloura from "../assets/images/veloura.png";
import projectTaskmanage from "../assets/images/taskmanage.png";
import projectFurniture from "../assets/images/furniture.png";
import projectK9 from "../assets/images/ceylone k9.png";
import projectGem from "../assets/images/gem.png";
import projectGarment from "../assets/images/garment.png";
import projectSramabhimanee from "../assets/images/sramabhimanee.png";

const projectsData = [
  {
    id: 1,
    title: "Veloura",
    tags: ["React", "Tailwind", "Firebase"],
    image: projectVeloura,
    description: "\"Wear Confidence. Define Elegance.\" Veloura is a stylish clothing brand website built with a modern ecommerce layout, premium colors, and product-focused sections offering premium fashion crafted for modern lifestyles.\n\nKey Features:\n• Clothing brand landing page\n• Product collection section\n• Feature cards\n• Luxury color palette\n• Responsive ecommerce layout",
    github: "https://rococo-gelato-068847.netlify.app/"
  },
  {
    id: 2,
    title: "OSHU Enterprises",
    tags: ["React Native", "Expo"],
    image: projectTaskmanage,
    description: "A task management mobile application developed for OSHU Enterprises designed to help users organize daily tasks with clear status tracking and a clean, pastel mobile UI.\n\nKey Features:\n• Add new tasks\n• Pending, In Progress, Completed, and Overdue task sections\n• Start time and end time management\n• Task completion checkbox\n• Mobile-friendly pastel UI",
    github: "https://agent-6a045f22e139a94939b19dbc--oshu-enterprises.netlify.app/products"
  },
  {
    id: 3,
    title: "InteriorStudio",
    tags: ["React", "Vite", "Tailwind"],
    image: projectFurniture,
    description: "InteriorStudio is a modern furniture and interior design website that helps users design their dream living space. It features a clean UI, decor accents, and stylish furniture collections.\n\nKey Features:\n• Modern hero section with premium visuals\n• Featured furniture collections\n• Decor accents and inspirations\n• Responsive and clean layout\n• Engaging UI animations",
    github: "https://imaginative-dolphin-ec4dc0.netlify.app/"
  },
  {
    id: 4,
    title: "Ceylon K9 Academy",
    tags: ["React", "Vite", "Tailwind"],
    image: projectK9,
    description: "Ceylon K9 Academy offers professional dog training services. The website features a dark, premium aesthetic with sections for obedience training, puppy foundations, and protection basics.\n\nKey Features:\n• Premium dark theme design\n• Service packages and pricing\n• Training program details\n• WhatsApp booking integration\n• Responsive layout",
    github: "https://shiny-lolly-bf658c.netlify.app/"
  },
  {
    id: 5,
    title: "Gem Heaven Lanka",
    tags: ["HTML", "CSS", "React"],
    image: projectGem,
    description: "Gem Heaven Lanka is a luxury gem and jewelry website showcasing hand-selected sapphires and diamonds. It features a premium light-brown aesthetic, product detail views, and trust badges for certified gems.\n\nKey Features:\n• Hero section with luxury gem visuals\n• Featured product collections\n• Trust badges and certifications\n• Clean, light-brown premium theme\n• Responsive design",
    github: "https://shiny-lolly-bf658c.netlify.app/"
  },
  {
    id: 6,
    title: "ThreadWorks",
    tags: ["React", "Vite", "Tailwind"],
    image: projectGarment,
    description: "A professional garment manufacturing website designed with a premium corporate layout for showcasing factory services, production process, and business credibility.\n\nKey Features:\n• Modern hero section\n• About section & Trust/feature cards\n• Apparel production categories\n• Quote form & Capacity tracker concepts\n• Premium navy and white theme",
    github: "https://lucent-biscuit-95d94a.netlify.app/"
  },
  {
    id: 7,
    title: "SRAMABHIMANEE",
    tags: ["React", "Vite", "Tailwind"],
    image: projectSramabhimanee,
    description: "Sramabhimanee's MyLife Global Online Business Park is a digital city for global business growth. It provides a platform for businesses to create lifetime online shops and reach customers worldwide.\n\nKey Features:\n• Business park digital platform\n• Online shop creation for members\n• Global reach features\n• Responsive marketplace layout\n• Premium dark UI design",
    github: "https://melodious-frangollo-58392f.netlify.app/"
  }
];

// SVG Icons & Graphics
const StarIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

// Botanical branch drawing to match the overlay in mockup
const BotanicalBranch = ({ className }) => (
  <svg className={className} viewBox="0 0 100 200" fill="none" stroke="#4E1324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    {/* Main stem */}
    <path d="M50 200 C48 150, 52 100, 48 20" />
    
    {/* Leaves/buds branching out */}
    {/* Left branch bottom */}
    <path d="M49 160 C30 150, 25 130, 32 125" />
    <circle cx="32" cy="125" r="3" fill="#4E1324" />
    <path d="M49 160 C25 155, 18 145, 20 140" />
    <circle cx="20" cy="140" r="2.5" fill="#4E1324" />

    {/* Right branch bottom */}
    <path d="M50 145 C70 135, 75 115, 68 110" />
    <circle cx="68" cy="110" r="3.5" fill="#4E1324" />
    
    {/* Left branch mid */}
    <path d="M49 110 C28 95, 22 75, 30 70" />
    <circle cx="30" cy="70" r="3" fill="#4E1324" />
    
    {/* Right branch mid */}
    <path d="M49 90 C68 80, 72 60, 65 55" />
    <circle cx="65" cy="55" r="3" fill="#4E1324" />
    <path d="M49 90 C72 90, 78 80, 74 75" />
    <circle cx="74" cy="75" r="2.5" fill="#4E1324" />

    {/* Top branches */}
    <path d="M48 50 C35 35, 35 25, 42 20" />
    <circle cx="42" cy="20" r="2.5" fill="#4E1324" />
    <path d="M48 35 C58 20, 62 15, 55 10" />
    <circle cx="55" cy="10" r="2" fill="#4E1324" />
  </svg>
);

// Hero Ripple Animation
const HeroRipples = () => (
  <div className="hero__ripples">
    <div className="ripple"></div>
    <div className="ripple"></div>
    <div className="ripple"></div>
    <div className="ripple"></div>
  </div>
);

const HeroDotPattern = () => (
  <svg className="hero__dot-pattern" width="60" height="60" viewBox="0 0 60 60" fill="rgba(255,255,255,0.4)" xmlns="http://www.w3.org/2000/svg">
    {[...Array(5)].map((_, i) => (
      [...Array(5)].map((_, j) => (
        <circle key={`${i}-${j}`} cx={6 + j * 12} cy={6 + i * 12} r="2" />
      ))
    ))}
  </svg>
);

// Wavy Text Animation for Hero Title
const WavyText = ({ text, delayOffset = 0 }) => (
  <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
    {text.split("").map((char, index) => {
      if (char === " ") {
        return <span key={index} style={{ display: "inline-block", width: "0.25em" }}>&nbsp;</span>;
      }
      return (
        <span
          key={index}
          className="wavy-char"
          style={{ animationDelay: `${delayOffset + index * 0.05}s` }}
        >
          {char}
        </span>
      );
    })}
  </span>
);

const softwareSkillsData = [
  { name: "HTML5", short: "H5", percentage: 95 },
  { name: "Java", short: "Jv", percentage: 85 },
  { name: "JavaScript", short: "Js", percentage: 90 },
  { name: "PHP", short: "Ph", percentage: 75 },
  { name: "TypeScript", short: "Ts", percentage: 85 },
  { name: "AWS Cloud", short: "Aw", percentage: 75 },
  { name: "Angular", short: "An", percentage: 80 },
  { name: "Angular.js", short: "Aj", percentage: 75 },
  { name: "Bootstrap", short: "Bs", percentage: 90 },
  { name: "Expo", short: "Ex", percentage: 85 },
  { name: "Flutter", short: "Fl", percentage: 80 },
  { name: "JavaFX", short: "Jf", percentage: 75 },
  { name: "JWT", short: "Jw", percentage: 80 },
  { name: "Next JS", short: "Nx", percentage: 85 },
  { name: "NodeJS", short: "Nd", percentage: 85 },
  { name: "Apache Maven", short: "Mv", percentage: 70 },
  { name: "MySQL", short: "My", percentage: 85 },
  { name: "Microsoft SQL Server", short: "Ms", percentage: 75 },
  { name: "Hibernate", short: "Hb", percentage: 70 },
  { name: "MongoDB", short: "Mg", percentage: 80 }
];

const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description: "Creating responsive, fast-loading, and visually gorgeous web apps tailored for modern browsers. We build websites that are not only beautiful but also highly functional.",
    features: [
      "Responsive design across devices",
      "Fast loading times & optimization",
      "Modern & engaging user interfaces",
      "Cross-browser compatibility"
    ]
  },
  {
    id: 2,
    title: "Mobile Development",
    description: "Building native-quality, high-performance mobile applications for both iOS and Android. Our mobile apps ensure seamless performance and a premium user experience.",
    features: [
      "Cross-platform development",
      "High-performance native feel",
      "Smooth animations & transitions",
      "App store deployment support"
    ]
  },
  {
    id: 3,
    title: "UI/UX Design",
    description: "Designing refined, modern layouts, micro-interactions, and aesthetics that captivate users. We focus on the user journey to create intuitive and memorable experiences.",
    features: [
      "User-centered design approach",
      "Wireframing & prototyping",
      "Interactive micro-animations",
      "Premium visual aesthetics"
    ]
  },
  {
    id: 4,
    title: "Optimization & SEO",
    description: "Boosting app performance, implementing SEO best practices, and ensuring fast rendering. We help your website rank higher and load faster to retain your audience.",
    features: [
      "Search engine optimization (SEO)",
      "Performance tuning & caching",
      "Accessibility improvements",
      "Analytics & tracking setup"
    ]
  }
];

const CircularSkill = ({ name, short, percentage }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="circular-skill" data-aos="zoom-in">
      <div className="circular-skill__ring-container">
        <svg className="circular-skill__ring" width="90" height="90">
          <circle 
            className="circular-skill__ring-bg" 
            cx="45" cy="45" r={radius} 
          />
          <circle 
            className="circular-skill__ring-progress" 
            cx="45" cy="45" r={radius} 
            style={{ 
              strokeDasharray: circumference, 
              strokeDashoffset: strokeDashoffset 
            }} 
          />
        </svg>
        <div className="circular-skill__icon">
          {short}
        </div>
      </div>
      <span className="circular-skill__name">{name}</span>
    </div>
  );
};

export default function Portfolio() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedServiceModal, setSelectedServiceModal] = useState(null);
  const hoverTimeoutRef = useRef(null);

  const handleMouseEnterCard = (service) => {
    hoverTimeoutRef.current = setTimeout(() => {
      setSelectedServiceModal(service);
    }, 1000);
  };

  const handleMouseLeaveCard = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "39933e17-e7cc-46fb-8911-82239350659d",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: "", email: "", message: "" });
      } else {
        console.error("Error submitting form", result);
        alert("Sorry, there was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Sorry, there was an error sending your message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handlePrevProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
  };

  const handleNextProject = () => {
    setActiveProjectIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="portfolio-v2" role="main">
      {/* HEADER / NAV */}
      <header className="portfolio__header">
        <div className="portfolio__brand">
          <img src={saviLogo} alt="Savi" className="brand__logo-img" />
        </div>
        <nav className="portfolio__nav" aria-label="Primary">
          <a href="#home" className="active">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-section__content" data-aos="fade-right">
          <HeroDotPattern />
          <h1 className="hero-section__title">
            <WavyText text="Building Clean," delayOffset={0} /><br />
            <WavyText text="Modern Web &" delayOffset={0.75} /><br />
            <WavyText text="Mobile Experiences" delayOffset={1.35} />
          </h1>
          <p className="hero-section__description">
            I’m a Web & Mobile Application Developer focused on creating responsive, user-friendly, and visually polished digital products.
          </p>
          <div className="hero-section__actions">
            <a href="#projects" className="btn btn--white">VIEW PROJECTS</a>
            <a href="#contact" className="btn btn--outline-white">CONTACT ME</a>
          </div>
          <HeroDotPattern />
        </div>

        <div className="hero-section__image-container" data-aos="fade-left">
          <HeroRipples />
          <img
            src={savindiPhoto}
            alt="Savindi Layanga"
            className="hero__person-img"
            loading="eager"
          />
        </div>

        {/* Curved Divider (Beige to White) */}
        <div className="section-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section" id="about">
        <div className="about-section__content" data-aos="fade-up">
          <h2 className="about-section__title">
            About Me
          </h2>
          <div className="about-section__decor">
            <span className="decor__line"></span>
            <span className="decor__triangle">▼</span>
            <span className="decor__line"></span>
          </div>
          <p className="about-section__description">
            I am a passionate Web & Mobile Application Developer dedicated to creating modern digital experiences that are both visually compelling and highly functional. I specialize in designing and developing responsive websites and mobile applications with a focus on performance, usability, and clean architecture. By combining creative design thinking with technical expertise, I build solutions that deliver seamless user experiences across all devices. My goal is to turn ideas into impactful digital products that engage users, solve real-world problems, and create lasting value through innovation and technology.
          </p>
        </div>

        {/* Curved Divider (White to Beige) */}
        <div className="section-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#FDF8F5" />
          </svg>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section" id="services">
        <div className="decor__stars-services">
          <StarIcon className="decor__star-service-1" />
          <StarIcon className="decor__star-service-2" />
        </div>
        
        <h2 className="services-section__title" data-aos="fade-down">
          My Services
        </h2>
        
        <div className="services-grid">
          {/* Service Card 1 */}
          <div 
            className="service-card" 
            data-aos="fade-right" 
            data-aos-delay="0" 
            onClick={() => setSelectedServiceModal(servicesData[0])}
            onMouseEnter={() => handleMouseEnterCard(servicesData[0])}
            onMouseLeave={handleMouseLeaveCard}
            style={{ cursor: "pointer" }}
          >
            <div className="service-card__icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <h3 className="service-card__title">Web Development</h3>
            <p className="service-card__description">
              Creating responsive, fast-loading, and visually gorgeous web apps tailored for modern browsers.
            </p>
            <span className="service-card__link">View Details ➔</span>
          </div>

          {/* Service Card 2 */}
          <div 
            className="service-card" 
            data-aos="fade-right" 
            data-aos-delay="100" 
            onClick={() => setSelectedServiceModal(servicesData[1])}
            onMouseEnter={() => handleMouseEnterCard(servicesData[1])}
            onMouseLeave={handleMouseLeaveCard}
            style={{ cursor: "pointer" }}
          >
            <div className="service-card__icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
              </svg>
            </div>
            <h3 className="service-card__title">Mobile Development</h3>
            <p className="service-card__description">
              Building native-quality, high-performance mobile applications for both iOS and Android.
            </p>
            <span className="service-card__link">View Details ➔</span>
          </div>

          {/* Service Card 3 */}
          <div 
            className="service-card" 
            data-aos="fade-left" 
            data-aos-delay="0" 
            onClick={() => setSelectedServiceModal(servicesData[2])}
            onMouseEnter={() => handleMouseEnterCard(servicesData[2])}
            onMouseLeave={handleMouseLeaveCard}
            style={{ cursor: "pointer" }}
          >
            <div className="service-card__icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <path d="M12 16L16 12L12 8"/>
                <line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
            </div>
            <h3 className="service-card__title">UI/UX Design</h3>
            <p className="service-card__description">
              Designing refined, modern layouts, micro-interactions, and aesthetics that captivate users.
            </p>
            <span className="service-card__link">View Details ➔</span>
          </div>

          {/* Service Card 4 */}
          <div 
            className="service-card" 
            data-aos="fade-left" 
            data-aos-delay="100" 
            onClick={() => setSelectedServiceModal(servicesData[3])}
            onMouseEnter={() => handleMouseEnterCard(servicesData[3])}
            onMouseLeave={handleMouseLeaveCard}
            style={{ cursor: "pointer" }}
          >
            <div className="service-card__icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3 className="service-card__title">Optimization & SEO</h3>
            <p className="service-card__description">
              Boosting app performance, implementing SEO best practices, and ensuring fast rendering.
            </p>
            <span className="service-card__link">View Details ➔</span>
          </div>
        </div>

        {/* Service Modal */}
        {selectedServiceModal && (
          <div className="service-modal-overlay" onClick={() => setSelectedServiceModal(null)}>
            <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="service-modal-close" onClick={() => setSelectedServiceModal(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="service-modal-body">
                <h3 className="service-modal-title">{selectedServiceModal.title}</h3>
                <p className="service-modal-description">{selectedServiceModal.description}</p>
                
                <ul className="service-modal-features">
                  {selectedServiceModal.features.map((feature, i) => (
                    <li key={i}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="check-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="service-modal-actions">
                  <a 
                    href="#contact" 
                    className="btn btn--primary service-modal-btn" 
                    onClick={() => setSelectedServiceModal(null)}
                  >
                    Get Quote
                  </a>
                  <button 
                    className="btn btn--secondary service-modal-btn" 
                    onClick={() => setSelectedServiceModal(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Curved Divider (Beige to White) */}
        <div className="section-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* EXPERTISE SECTION */}
      <section className="expertise-section" id="skills">
        <div className="expertise-section__content" data-aos="fade-up">
          <h2 className="expertise-section__title">
            My Technical Skills
          </h2>
          <p className="expertise-section__description">
            I keep my skills updated with modern frameworks and libraries to write robust, maintainable code. Here is a brief look at my development competencies.
          </p>

          {/* Circular Skills Grid */}
          <div className="circular-skills-container">
            {softwareSkillsData.map((skill, index) => (
              <CircularSkill 
                key={index}
                name={skill.name}
                short={skill.short}
                percentage={skill.percentage}
              />
            ))}
          </div>

          <a href="#contact" className="btn btn--primary expertise__btn">Get in Touch</a>
        </div>

        {/* Curved Divider (White to Projects Section) */}
        <div className="section-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="projects-section" id="projects">
        <div className="projects-section__header-row">
          <h2 className="projects-section__title">My Projects</h2>
        </div>

        <div className="projects-slider-wrapper" data-aos="zoom-in">
          <button 
            onClick={handlePrevProject} 
            className="slider-arrow slider-arrow--prev slider-arrow--side" 
            aria-label="Previous Project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className="projects-slider__container">
            <div 
              className="projects-slider__track" 
              style={{ "--active-index": activeProjectIndex }}
            >
              {projectsData.map((project) => (
                <div 
                  className="project-card" 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="project-card__image-box">
                    <img src={project.image} alt={project.title} className="project-card__img" />
                  </div>
                  <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <div className="project-card__tags">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={handleNextProject} 
            className="slider-arrow slider-arrow--next slider-arrow--side" 
            aria-label="Next Project"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="projects-slider__dots">
          {projectsData.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${activeProjectIndex === index ? "active" : ""}`}
              onClick={() => setActiveProjectIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Curved Divider (White to Contact Beige) */}
        <div className="section-divider">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,0 Q720,120 1440,0 L1440,120 L0,120 Z" fill="#FFF5F0" />
          </svg>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={() => setSelectedProject(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="project-modal-body">
                <img src={selectedProject.image} alt={selectedProject.title} className="project-modal-image" />
                
                <div className="project-modal-info">
                  <h3 className="project-modal-title">{selectedProject.title}</h3>
                  
                  <div className="project-modal-tags">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>
                  
                  <p className="project-modal-description">{selectedProject.description}</p>
                  
                  <div className="project-modal-links">
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                      View Live Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section" id="contact">
        <div className="contact-section__content">
          <div className="contact-section__header" data-aos="fade-right">
            <h2 className="contact-section__title">Join Us To Discover More</h2>
            <p className="contact-section__description">
              Have a project in mind or want to discuss a collaboration? Drop a message below and let's build something beautiful together.
            </p>
          </div>

          <div className="contact-form-card" data-aos="fade-left">
            {/* Dark Pink File Clip */}
            <div className="contact-card__clip" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" stroke="#9E3E4B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M30 40 L30 70 A 10 10 0 0 0 50 70 L50 25 A 15 15 0 0 1 80 25 L80 65 A 7.5 7.5 0 0 1 65 65 L65 35" />
              </svg>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form__row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="form-input"
                      placeholder="Your Name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-input"
                      placeholder="Your Email Address"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    className="form-input form-textarea"
                    placeholder="Type Here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    rows="4"
                    required
                  />
                </div>

                <div className="contact-form__footer">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" className="checkbox-input" />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-label">Subscribe To Our Newsletter</span>
                  </label>
                  
                  <button type="submit" className="btn btn--primary contact-submit-btn" disabled={loading}>
                    {loading ? "Sending..." : "Send Now"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="contact-success">
                <div className="success-icon-box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="success-title">Message Sent!</h3>
                <p className="success-description">
                  Thank you for reaching out. I have received your message and will respond to you shortly!
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn--secondary success-back-btn">
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-v2__footer" role="contentinfo">
        {/* Double Wave Transition matching mockup */}
        <div className="footer__wave-container">
          <svg className="footer__wave-svg" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            {/* Background Wave */}
            <path d="M0,40 C480,90 960,10 1440,60 L1440,120 L0,120 Z" fill="var(--color-peach)" opacity="0.45" />
            {/* Foreground Wave (Matches burgundy footer bg) */}
            <path d="M0,60 C480,110 960,30 1440,80 L1440,120 L0,120 Z" fill="var(--color-burgundy)" />
          </svg>
          {/* Scroll to Top floating round button */}
          <button onClick={scrollToTop} className="back-to-top" aria-label="Back to Top">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="back-to-top-icon">
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </button>
        </div>

        <div className="footer__container">
          <div className="footer__grid">
            
            {/* Column 1: Brand & About */}
            <div className="footer__col footer__col--about">
              <div className="footer__brand">
                <img src={saviLogo} alt="Savi Logo" className="brand__logo-img" />
              </div>
              <p className="footer__about-text">
                Crafting clean, elegant, and user-centric web and mobile solutions. Focused on bringing ideas to life with high performance and premium design.
              </p>
              <div className="footer__socials">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/savindi-layanga-269589264" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100082799557221" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/savindilayanga?igsh=MTBuZ254bWQxOWR0ZQ==" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="mailto:savindilayanga@gmail.com" className="social-link" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Navigation / Quick Links */}
            <div className="footer__col footer__col--links">
              <h4 className="footer__heading">Navigation</h4>
              <ul className="footer__links-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Contact details & Status */}
            <div className="footer__col footer__col--contact">
              <h4 className="footer__heading">Get In Touch</h4>
              <div className="footer__contact-info">
                <p className="contact-item">
                  <span className="contact-icon" aria-hidden="true">📍</span>
                  <span className="contact-text">Matara, Sri Lanka</span>
                </p>
                <p className="contact-item">
                  <span className="contact-icon" aria-hidden="true">✉️</span>
                  <a href="mailto:savindilayanga@gmail.com" className="contact-text contact-link">savindilayanga@gmail.com</a>
                </p>
                <p className="contact-item">
                  <span className="contact-icon" aria-hidden="true">📞</span>
                  <a href="tel:+94776183770" className="contact-text contact-link">+94 776 183 770</a>
                </p>
                <p className="contact-item">
                  <span className="contact-icon" aria-hidden="true">💬</span>
                  <span className="contact-text">Open to Freelance & Roles</span>
                </p>
              </div>
              <div className="footer__status-badge">
                <span className="status-dot"></span>
                <span className="status-text">Available for projects</span>
              </div>
            </div>

          </div>

          <div className="footer__bottom">
            <p className="footer__copy">
              &copy; {new Date().getFullYear()} Savindi Layanga. All rights reserved.
            </p>
            <p className="footer__design-credit">
              Designed &amp; Coded with <span className="heart-icon" aria-hidden="true">♥</span> by Savindi
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
