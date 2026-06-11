import "./SplashScreen.css";
import splashBg from "../assets/images/splash-bg.jpg";
const SAVINDI = ["S", "A", "V", "I", "N", "D", "I"];
const LAYANGA = ["L", "A", "Y", "A", "N", "G", "A"];

export default function SplashScreen({ onEnter }) {
  return (
    <button
      type="button"
      className="splash"
      onClick={onEnter}
      aria-label="Enter portfolio"
      style={{ background: `url(${splashBg}) center/cover no-repeat` }}
    >
      <div className="splash__stage" aria-hidden="true">
        <div className="splash__word">
          <div className="splash__row splash__row--top">
            {SAVINDI.map((letter, index) => (
              <span
                key={`savindi-${index}`}
                className={`splash__letter ${index % 2 === 0 ? "splash__letter--tilt-left" : "splash__letter--tilt-right"}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <div className="splash__row splash__row--bottom">
            {LAYANGA.map((letter, index) => (
              <span
                key={`layanga-${index}`}
                className={`splash__letter ${index % 2 === 0 ? "splash__letter--tilt-right" : "splash__letter--tilt-left"}`}
                style={{ animationDelay: `${(index + SAVINDI.length) * 0.15}s` }}
              >
                {letter}
              </span>
            ))}
          </div>
          <span className="splash__role">WEB DEVELOPER</span>
        </div>
      </div>
    </button>
  );
}
