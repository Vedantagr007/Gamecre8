import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import FeedbackModal from "./Feedback";
import { Logout } from "./Logout";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  return (
    <div className="relative inline-block shadow-md border-2 rounded-2xl py-1 px-2">
      <button
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex items-center"
      >
        <img
          alt="tania andrew"
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
          className="object-cover object-center w-8 h-8 rounded-full cursor-pointer"
        />
        <span className="font-orelega text-lg ml-1 px-2">Zung Yung</span>
        <SlArrowDown className="ml-1" />
      </button>
      {isOpen && (
        <ul className="absolute right-0 top-full mt-2 z-10 min-w-[180px] flex-col gap-2 shadow-md border-2 rounded-2xl bg-white p-2 text-sm font-normal text-blue-gray-500 focus:outline-none">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full text-left"
          >
            <span className="flex justify-start items-center pl-4 gap-2 font-orelega text-base antialiased font-medium leading-normal text-inherit">
              <img src="feedback.svg" className="w-5 h-5" alt="Feedback" />
              <span>Feedback</span>
            </span>
          </button>

          <button
            onClick={() => setIsLogoutOpen(true)}
            className="w-full text-left"
          >
            <span className="flex justify-start items-center pl-4 gap-2 font-orelega text-base antialiased font-medium leading-normal text-inherit">
              <img src="logout.svg" className="w-5 h-5" alt="Log out" />
              <span>Log out</span>
            </span>
          </button>
        </ul>
      )}
      {isModalOpen && <FeedbackModal onClose={() => setIsModalOpen(false)} />}
      {isLogoutOpen && <Logout onClose={() => setIsLogoutOpen(false)} />}
    </div>
  );
};
