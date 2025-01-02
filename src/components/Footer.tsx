export const Footer = () => {
  return (
    <div className="d-flex justify-content-between px-3 mb-4 font-weight-bold footer-container">
      <div className="footer-text">Proudly made by GameCre8</div>
      <div className="footer-link">Privacy policy</div>
      <div className="d-flex align-items-center footer-copyright">
        <img
          src="copyright.svg"
          width="16px"
          height="16px"
          className="mx-1 copyright-icon"
          alt="Copyright"
        />
        2024 GameCre8 All rights reserved
      </div>
    </div>
  );
};

const styles = `
  .footer-container {
    flex-wrap: wrap;
  }

  .footer-text, .footer-link, .footer-copyright {
    margin-bottom: 0.5rem;
  }

  .copyright-icon {
    transition: transform 0.2s ease-in-out;
  }

  .copyright-icon:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .footer-text, .footer-link, .footer-copyright {
      margin: 0.5rem 0;
    }
  }

  @media (max-width: 576px) {
    .footer-container {
      padding: 1rem;
    }

    .footer-text {
      font-size: 0.9rem;
    }

    .footer-link {
      font-size: 0.9rem;
      cursor: pointer;
    }

    .footer-copyright {
      font-size: 0.8rem;
    }
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);