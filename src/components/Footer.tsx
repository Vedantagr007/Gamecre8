export const Footer = () => {
  return (
    <div className="d-flex justify-content-between px-3 mb-4 font-weight-bold">
      <div>Proudly made by GameCre8</div>
      <div>Privacy policy</div>
      <div className="d-flex align-items-center">
        <img
          src="copyright.svg"
          width="16px"
          height="16px"
          className="mx-1"
          alt="Copyright"
        />
        2024 GameCre8 All rights reserved
      </div>
    </div>
  );
};