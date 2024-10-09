import { useRecoilState } from "recoil";
import { LoginAtom } from "../atom";
import { Dropdown } from "./Dropdown";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [login, setLogin] = useRecoilState(LoginAtom);
  const navigate = useNavigate();
  return (
    <div className="flex justify-between m-5 px-10">
      <div className="flex">
        <img className="h-[70px]" src="logo.png" alt="logo" />
        <span className="flex items-center font-orelega text-3xl bg-gradient-to-r from-[#FF6FD8] to-[#3813C2] text-transparent bg-clip-text">
          GameCre8
        </span>
      </div>
      <div className="flex gap-8 justify-center items-center">
        <div className="flex font-orelega text-[#7C49BE] text-lg" id="">
          About us
        </div>
        <div className="flex font-orelega text-[#7C49BE] text-lg">
          <a href="#products-section">
            Product
          </a>
        </div>
        <div className="flex font-orelega text-[#7C49BE] text-lg">
          <a href="#model-section">
            Model
          </a>
        </div>
        <div className="flex font-orelega text-[#7C49BE] text-lg">
          Follow us
        </div>
        <div className="flex font-orelega text-[#7C49BE] text-lg">
          <a href="#team-section">
            Team
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center">
        {!login ? (
          <button
            className="flex justify-center items-center border-2 border-[#7C49BE] rounded-full py-1 px-3 gap-2"
            onClick={() => {
              setLogin(true);
              navigate("/main");
            }}
          >
            <div className="font-orelega text-[#7C49BE]">
              Create account
            </div>
            <span className="flex justify-center">
              <svg
                fill="#7C49BE"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                //@ts-ignore
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330 330"
                xml:space="preserve"
                transform="rotate(45)"
                stroke="#7C49BE"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    id="XMLID_21_"
                    d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5 c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15 V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"
                  ></path>{" "}
                </g>
              </svg>
            </span>
          </button>
        ) : (
          <div className="">
            <Dropdown />
          </div>
        )}
      </div>
    </div>
  );
};
