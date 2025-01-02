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
        className="modal d-flex align-items-center justify-content-center bg-opacity-50"
        style={{
          position: "fixed",
          inset: "0",
          zIndex: 50,
          backgroundColor: "#D9D9D9",
        }}
      >
        <div className="modal-dialog responsive-modal-dialog">
          <div className="modal-content rounded-3 shadow">
            <div className="modal-header d-flex justify-content-between">
              <div className="modal-title h5">Feedback</div>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              />
            </div>

            <div className="modal-body">
              <div className="text-muted mb-4 h6">Rate us</div>
              <div>
                <Rating />
              </div>
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="mb-3">
                  <label
                    htmlFor="feedback"
                    className="form-label text-muted h6"
                  >
                    Tell us what we need to improve
                  </label>
                  <textarea
                    id="feedback"
                    rows={4}
                    className="form-control"
                    placeholder=""
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit Feedback
                  </button>
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
    <div className="d-flex justify-content-between">
      {new Array(5).fill(0).map((_, index) => (
        <svg
          key={index}
          width="35"
          height="35"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleRatingClick(index + 1)}
          className="rating-star"
        >
          <polygon
            points="12,2 15,9 22,9 16,14 18,21 12,17 6,21 8,14 2,9 9,9"
            fill={index < selectedRating ? "yellow" : "none"}
            stroke="gray"
            strokeWidth="1"
          />
        </svg>
      ))}
    </div>
  );
};

export default FeedbackModal;

// Add the following CSS styles for responsiveness
const styles = `
  .modal-dialog {
    max-width: 600px;
    margin: 1rem;
  }

  .rating-star {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .responsive-modal-dialog {
      max-width: 90%;
    }
  }

  @media (max-width: 576px) {
    .responsive-modal-dialog {
      max-width: 100%;
      padding: 1rem;
    }

    .rating-star {
      width: 25px;
      height: 25px;
    }
  }
`;

// Inject the styles into the DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);