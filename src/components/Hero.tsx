import { FollowUsComponent } from "./FollowUsComponent";
import { ModelInfo } from "./ModelInfo";
import { ProductSection } from "./ProductSection";
import { Team } from "./Team";

export const Hero = () => {
  return (
    <div>
      <div
        className="hero-container pt-5"
        style={{
          height: "700px",
          backgroundImage: "url(heroGif.gif)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-text display-2 fw-bold text-center">
          Let your imagination create <br /> new worlds
        </div>
        <div className="hero-subtext text-center mt-4 h4 font-weight-light">
          At <u className="px-1">GameCre8</u>, we're obsessed with the ultimate
          gaming experience. With LGM (Large <br /> Game Model), our games don't
          just entertain, they evolve.
        </div>
        <div className="hero-button-container d-flex justify-content-center mt-5">
          <button
            className="btn btn-lg btn-gradient rounded-pill d-flex align-items-center justify-content-center shadow"
            style={{
              background: "linear-gradient(to right, #B40090, #7C49BE)",
              boxShadow: "0 0 20px #B40090, 0 0 20px #7C49BE",
              padding: "10px 20px",
              transition: "transform 0.3s",
              color: "white",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <div className="me-2">Try Eyas</div>
            <img src="mouse.svg" width="24px" height="24px" alt="mouse-icon" />
          </button>
        </div>
      </div>
      <ProductSection />
      <FollowUsComponent />
      <ModelInfo />
      <Team />
      <style>
        {`
          .hero-container {
            height: 700px;
          }
          .hero-text {
            font-size: 2rem;
          }
          .hero-subtext {
            font-size: 1rem;
            padding: 0 15px;
          }
          .hero-button-container button {
            font-size: 1rem;
            padding: 8px 15px;
          }
          @media (min-width: 768px) {
            .hero-text {
              font-size: 3rem;
            }
            .hero-subtext {
              font-size: 1.25rem;
            }
            .hero-button-container button {
              font-size: 1.25rem;
              padding: 10px 20px;
            }
          }
          @media (min-width: 1200px) {
            .hero-text {
              font-size: 4rem;
            }
            .hero-subtext {
              font-size: 1.5rem;
            }
            .hero-container {
              height: 900px;
            }
            .hero-button-container button {
              font-size: 1.5rem;
              padding: 15px 25px;
            }
          }
        `}
      </style>
    </div>
  );
};