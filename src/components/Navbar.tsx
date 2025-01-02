// Navbar.js
import { useRecoilState } from "recoil";
import { LoginAtom } from "../atom";
import { Dropdown } from "./Dropdown";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import '../styles/responsive.css';

export const Navbar = () => {
  const [login, setLogin] = useRecoilState(LoginAtom);
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-3 px-lg-5">
        {/* Logo and brand */}
        <div className="navbar-brand d-flex align-items-center">
          <img
            src="logo.png"
            alt="logo"
            style={{
              height: "3.5em",
            }}
          />
          <span
            className="ms-2 ms-md-3 flex items-center font-orelega text-4xl text-transparent bg-clip-text fw-bold"
            style={{
              color: "#7C49BE",
              transition: "color 0.3s",
              fontSize: "1.5rem", // Responsive font size
            }}
          >
            GameCre8
          </span>
        </div>

        {/* Reorganized navbar content */}
        <div className="d-flex align-items-center order-lg-last">
          {/* Account button/dropdown wrapper */}
          <div className="nav-end-items me-2 me-lg-0">
            {!login ? (
              <button
                className="btn rounded-pill create-account-btn"
                onClick={() => {
                  setLogin(true);
                  navigate("/main");
                }}
              >
                <span className="button-text">Create Account</span>
                <span className="d-flex justify-content-center ms-2">
                  <svg
                    fill="#FFFFFF"
                    height="16"
                    width="16"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 330 330"
                    transform="rotate(45)"
                    stroke="#FFFFFF"
                  >
                    <path d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"></path>
                  </svg>
                </span>
              </button>
            ) : (
              <Dropdown />
            )}
          </div>

          {/* Toggler button */}
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about-us"
                style={{
                  color: "#7C49BE",
                  transition: "color 0.3s",
                  fontSize: "1rem", // Adjust font size
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
                  fontSize: "1rem", // Adjust font size
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
                  fontSize: "1rem", // Adjust font size
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
                  fontSize: "1rem", // Adjust font size
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
                  fontSize: "1rem", // Adjust font size
                }}
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          .nav-end-items {
            position: relative;
            z-index: 1030;
          }

          .create-account-btn {
            background: linear-gradient(to right, #B40090, #7C49BE);
            color: white;
            display: flex;
            align-items: center;
            transition: transform 0.3s;
            white-space: nowrap;
            font-size: var(--base-font-size);
            padding: calc(var(--base-font-size) * 0.5) calc(var(--base-font-size) * 1);
          }

          /* The rest of your existing styles can be removed as they're now handled by responsive.css */
        `}
      </style>
    </nav>
  );
};
