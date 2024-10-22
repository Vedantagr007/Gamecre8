import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import FeedbackModal from "./Feedback";
import { Logout } from "./Logout";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return (
    <div className="position-relative d-inline-block shadow-sm border rounded-pill py-1 px-2">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="d-flex align-items-center"
      >
        <img
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="rounded-circle cursor-pointer"
          style={{ width: "32px", height: "32px", objectFit: "cover" }}
        />
        <span className="ml-1 px-2 h5">Zung Yung</span>
        <SlArrowDown className="ml-1" />
      </button>
      {isOpen && (
        <ul className="dropdown-menu show position-absolute end-0 mt-2 shadow-sm border rounded-2 bg-white p-2 text-muted">
          <li>
            <button
              onClick={() => setIsModalOpen(true)}
              className="dropdown-item d-flex align-items-center"
            >
              <img src="feedback.svg" className="me-2" style={{ width: "20px", height: "20px" }} alt="Feedback" />
              <span>Feedback</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsLogoutOpen(true)}
              className="dropdown-item d-flex align-items-center"
            >
              <img src="logout.svg" className="me-2" style={{ width: "20px", height: "20px" }} alt="Log out" />
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