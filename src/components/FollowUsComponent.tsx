export const FollowUsComponent = () => {
  return (
    <>
      <div className="row px-4 follow-us-container">
        <div className="col-md-6">
          <div className="h3 font-weight-bold follow-us-heading">
            Discover the thrilling AI gaming in today's world. Follow us on
          </div>
          <div className="d-flex mt-2 follow-us-icons">
            <a
              href="https://www.linkedin.com/groups/13070450/"
              target="_blank"
              className="follow-us-link"
            >
              <img
                src="LinkedIn.svg"
                alt="LinkedIn"
                className="follow-us-icon"
              />
            </a>
            <a
              href="https://www.instagram.com/gamecre8/profilecard/?igsh=MXA0Z2QwaTg0NjQ4aw=="
              target="_blank"
              className="ml-3 follow-us-link"
            >
              <img
                src="Instagram.svg"
                alt="Instagram"
                className="follow-us-icon"
              />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h3 font-weight-bold follow-us-heading">
            Stay updated with the latest game news and exclusive content.
          </div>
          <div className="mt-2">
            <input
              type="email"
              className="form-control form-control-sm mb-2 follow-us-input"
              placeholder="Your email address"
              required
            />
            <button className="btn btn-primary btn-sm follow-us-button">
              Join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Add the following CSS styles for responsiveness
const styles = `
  .follow-us-container {
    margin: 2rem 0;
  }

  .follow-us-heading {
    font-size: 1.5rem;
    line-height: 1.5;
  }

  .follow-us-icons {
    display: flex;
    align-items: center;
  }

  .follow-us-icon {
    width: 32px;
    height: 32px;
    transition: transform 0.2s ease-in-out;
  }

  .follow-us-icon:hover {
    transform: scale(1.1);
  }

  .follow-us-input {
    max-width: 100%;
  }

  .follow-us-button {
    display: inline-block;
    width: 100%;
  }

  @media (max-width: 768px) {
    .follow-us-container {
      text-align: center;
    }

    .follow-us-heading {
      font-size: 1.25rem;
    }

    .follow-us-icons {
      justify-content: center;
    }

    .follow-us-link {
      margin: 0 0.5rem;
    }
  }

  @media (max-width: 576px) {
    .follow-us-heading {
      font-size: 1rem;
    }

    .follow-us-input {
      width: 90%;
      margin: auto;
    }

    .follow-us-button {
      width: auto;
      margin: auto;
    }
  }
`;

// Inject the styles into the DOM
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);