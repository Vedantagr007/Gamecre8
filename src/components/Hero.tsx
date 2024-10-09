import { FollowUsComponent } from "./FollowUsComponent";
import { ModelInfo } from "./ModelInfo";
import { ProductSection } from "./ProductSection";
import { Team } from "./Team";

export const Hero = () => {
  return (
    <div>
      <div
        className=" h-[700px]  text-black pt-24 "
        style={{
          backgroundImage: "url(heroGif.gif)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center text-center font-orelega text-7xl">
          Let your imagination create <br></br> new worlds
        </div>
        <div className="flex justify-center font-orelega font-thin text-3xl pt-4">
          At <u className="px-1">GameCre8</u> , we're obsessed with the ultimate
          gaming experience. With LGM (Large <br /> Game Model), our games don't
          just entertain, they evolve.
        </div>
        <div className="flex justify-center mt-20 ">
          <button className="flex justify-center items-center rounded-full gap-1 bg-gradient-to-r from-[#B40090] to-[#7C49BE] font-orelega text-white p-2 text-xl shadow-[0_0_20px_#B40090,0_0_20px_#7C49BE] transition duration-300 transform hover:scale-110">
            <div>Try Eyas</div>
            <img src="mouse.svg" width={"20px"} height={"20px"}></img>
          </button>
        </div>
      </div>
      <ProductSection></ProductSection>
      <FollowUsComponent></FollowUsComponent>
      <ModelInfo></ModelInfo>
      <Team></Team>
    </div>
  );
};
