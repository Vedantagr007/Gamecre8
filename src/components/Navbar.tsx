// Navbar.js
import { useRecoilState } from "recoil";
import { LoginAtom } from "../atom";
import { Dropdown } from "./Dropdown";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const Navbar = () => {
  const [login, setLogin] = useRecoilState(LoginAtom);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid px-5">
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="logo.png"
            alt="logo"
            style={{
              height: "3.5em",
            }}
          />
          <span
            className="ms-3 flex items-center font-orelega text-4xl text-transparent bg-clip-text fw-bold"
            style={{
              color: "#7C49BE",
              transition: "color 0.3s",
              fontSize: "24px",
            }}
          >
            GameCre8
          </span>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about-us"
                style={{
                  color: "#7C49BE",
                  transition: "color 0.3s",
                  fontSize: "18px",
                }}
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#products-section"
                style={{
                  color: "#7C49BE",
                  transition: "color 0.3s",
                  fontSize: "18px",
                }}
              >
                Product
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#model-section"
                style={{
                  color: "#7C49BE",
                  transition: "color 0.3s",
                  fontSize: "18px",
                }}
              >
                Model
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#follow-us"
                style={{
                  color: "#7C49BE",
                  transition: "color 0.3s",
                  fontSize: "18px",
                }}
              >
                Follow Us
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#team-section"
                style={{
                  color: "#7C49BE",
                  transition: "color 0.3s",
                  fontSize: "18px",
                }}
              >
                Team
              </a>
            </li>
          </ul>
        </div>

        {/* Always-visible Create Account button */}
        <div className="d-flex align-items-center ms-3">
          {!login ? (
            <button
              className="btn rounded-pill py-1 px-3 d-flex align-items-center gap-2"
              style={{
                borderColor: "#FFFFFF",
                backgroundColor: "#7C49BE",
                color: "#FFFFFF",
              }}
              onClick={() => {
                setLogin(true);
                navigate("/main");
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#B40090")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#7C49BE")}
            >
              <div>Create Account</div>
              <span className="d-flex justify-content-center">
                <svg
                  fill="#FFFFFF"
                  height="20px"
                  width="20px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 330 330"
                  transform="rotate(45)"
                  stroke="#FFFFFF"
                >
                  <path
                    d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5
                    c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15
                    c8.284,0,15-6.716,15-15V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"
                  ></path>
                </svg>
              </span>
            </button>
          ) : (
            <Dropdown />
          )}
        </div>
      </div>
    </nav>
  );
};
