import "./SplashScreen.css";
import savindiPhoto from "../assets/images/savindi-photo.png";

const SAVINDI = ["S", "A", "V", "I", "N", "D", "I"];
const LAYANGA = ["L", "A", "Y", "A", "N", "G", "A"];

export default function SplashScreen({ onEnter }) {
  return (
    <button
      type="button"
      className="splash"
      onClick={onEnter}
      aria-label="Enter portfolio"
    >
      <span className="splash__role">WEB DEVELOPER</span>

      <div className="splash__stage" aria-hidden="true">
        <div className="splash__word">
          <div className="splash__row splash__row--top">
            {SAVINDI.map((letter, index) => (
              <span
                key={`savindi-${index}`}
                className={`splash__letter ${index % 2 === 0 ? "splash__letter--tilt-left" : "splash__letter--tilt-right"}`}
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
              >
                {letter}
              </span>
            ))}
          </div>
        </div>

        <img
          className="splash__hero"
          src={savindiPhoto}
          alt="Savindi Layanga"
          width={500}
          height={620}
          draggable={false}
        />
      </div>
    </button>
  );
}
