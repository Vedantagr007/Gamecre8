import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import FeedbackModal from "./Feedback";
import { Logout } from "./Logout";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return (
    <div
      className="position-relative d-inline-block shadow-sm border rounded-pill py-1 px-2 dropdown-container"
      style={{ maxWidth: "100%" }}
    >
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="d-flex align-items-center dropdown-toggle-button"
        style={{ width: "100%" }}
      >
        <img
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="rounded-circle cursor-pointer"
          style={{ width: "32px", height: "32px", objectFit: "cover" }}
        />
        <span className="ml-1 px-2 h5 dropdown-user-name">Zung Yung</span>
        <SlArrowDown className="ml-1 dropdown-arrow-icon" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu show position-absolute end-0 mt-2 shadow-sm border rounded-2 bg-white p-2 text-muted responsive-dropdown-menu">
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="dropdown-item d-flex align-items-center"
            >
              <img
                src="feedback.svg"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
                alt="Feedback"
              />
              <span>Feedback</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsLogoutOpen(true)}
              className="dropdown-item d-flex align-items-center"
            >
              <img
                src="logout.svg"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
                alt="Log out"
              />
              <span>Log out</span>
            </button>
          </li>
        </ul>
      )}
      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
      {isLogoutOpen && <Logout onClose={() => setIsLogoutOpen(false)} />}
    </div>
  );
};

// Add the following CSS styles for responsiveness
const styles = `
  .dropdown-container {
    max-width: 100%;
  }

  .dropdown-toggle-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .dropdown-user-name {
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .responsive-dropdown-menu {
    min-width: 150px;
    max-width: 90%;
  }

  @media (max-width: 768px) {
    .dropdown-container {
      width: 100%;
      padding: 0.5rem;
    }

    .dropdown-user-name {
      font-size: 0.9rem;
    }

    .responsive-dropdown-menu {
      right: 0;
      left: 0;
      margin: auto;
    }
  }

  @media (max-width: 576px) {
    .dropdown-toggle-button {
      flex-direction: column;
      align-items: flex-start;
    }

    .dropdown-user-name {
      font-size: 0.8rem;
    }

    .responsive-dropdown-menu {
      min-width: 100px;
    }
  }
`;

// Inject the styles into the DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);