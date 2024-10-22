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
        className="position-fixed top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center bg-secondary bg-opacity-50"
        style={{ zIndex: 50 }}
      >
        <div className="relative p-4 w-100" style={{ maxWidth: "720px" }}>
          <div className="bg-white rounded shadow">
            <div className="d-flex justify-content-between p-4 rounded-top">
              <div></div>
              <div className="h5 text-body">Log-out</div>
              <button onClick={handleClose} className="btn p-0">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 text-center">
              <div className="h6 text-muted mb-4">
                Are you sure you want to exit?
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mb-4 pb-4">
              <button className="btn btn-secondary px-4 py-2 rounded-pill">
                Yes
              </button>
              <button className="btn btn-primary text-white px-4 py-2 rounded-pill">
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};