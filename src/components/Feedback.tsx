import { useState } from "react";

const FeedbackModal = ({ onClose }: { onClose: () => void }) => {
  const [feedback, setFeedback] = useState("");

  const handleClose = () => {
    onClose();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback("");
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
            <div className="flex justify-between p-4 md:p-5  rounded-t ">
              <div></div>
              <div className=" text-xl font-semibold text-gray-900 ">
                Feedback
              </div>
              <div className="flex justify-end">
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
            </div>

            <div className="px-5">
              <div className="text-lg font-normal font-orelega text-[#AAAAAA] mb-4">
                Rate us
              </div>
              <div>
                <Rating></Rating>
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="feedback"
                    className="block mb-2 text-lg font-normal font-orelega text-[#AAAAAA] "
                  >
                    Tell us what we need to improve
                  </label>
                  <textarea
                    id="feedback"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-[#D9D9D9] rounded-lg border border-gray-300 "
                    placeholder=""
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingClick = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="flex items-center gap-20">
      {new Array(5).fill(0).map((_, index) => (
        <svg
          key={index}
          width="35"
          height="35"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleRatingClick(index + 1)}
        >
          <polygon
            points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
            fill={index < selectedRating ? "yellow" : "none"} // Set fill color based on selected rating
            stroke="gray"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
};

export default FeedbackModal;
