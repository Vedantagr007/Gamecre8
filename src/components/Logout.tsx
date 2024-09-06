export const Logout = ({ onClose }: { onClose: () => void }) => {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <div
        id="feedback-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-[calc(100%-1rem)] max-h-full bg-[#D9D9D9] bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-2xl shadow">
            <div className="flex justify-between p-4 md:p-5 rounded-t ">
              <div></div>
              <div className=" text-xl font-normal text-gray-900 font-orelega">
                Log-out
              </div>
              <button onClick={handleClose}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="gray"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-5 flex justify-center">
              <div className="text-lg font-normal font-orelega text-[#AAAAAA]  mb-4">
                Are you sure you want to exit
              </div>
            </div>

            <div className="flex justify-center gap-3 mb-6 pb-6 font-orelega">
              <button className="px-6 py-3 bg-[#D9D9D9] rounded-2xl">
                Yes
              </button>
              <button className="px-6 py-3 bg-[#7C49BE] rounded-2xl text-white">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
