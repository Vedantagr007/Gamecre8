export const Footer = () => {
  return (
    <div className="flex justify-between px-4 font-orelega m-8">
      <div>Proudly made by GameCre8</div>
      <div>Privacy policy</div>
      <div className="flex">
        <img
          src="copyright.svg"
          width={"16px"}
          height={"16px"}
          className="mx-1"
        ></img>
        2024 GameCre8 All rights reserved
      </div>
    </div>
  );
};
