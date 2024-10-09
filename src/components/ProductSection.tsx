import modelLogo from '../assets/model_logo.svg'

export const ProductSection = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-1 m-9" id="products-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          viewBox="0 -960 960 960"
          width="50px"
          fill="#"
        >
          <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
        </svg>
        <div className="font-orelega text-lg">Product</div>
      </div>
      <div className="rounded-3xl bg-[#D9D9D9] h-[800px] m-16"></div>
      <div className="flex justify-center items-center gap-1">
        <div className="h-10 w-10">
          <img src={modelLogo} alt="Model Logo"/>
        </div>
        <div className="font-orelega text-lg" id='model-section'>Model</div>
      </div>
      <div className="grid grid-cols-2 justify-between px-16 py-6 gap-24">
        <div className="text-lg font-orelega m-2">
          <div>Eyas model 1.0 (free)</div>
          <div className="font-orelega text-[#545454] text-left font-light text-xs mt-2">
            It's a free text to game model where it can run on basic games. It's
            a mind trained MLGM (mini language gaming model).
          </div>
        </div>
        <div className="text-lg font-orelega m-2">
          <div>
            Hawk Multimodel (paid) -{" "}
            <span className="text-[#7D4CBC]">coming soon</span>
          </div>
          <div className="font-orelega text-[#545454] text-left font-light text-xs mt-2">
            <div>It's a paid gaming model where it can run basic games.</div>
            <div>
              It's a large tarined LGM(Large Gaming Model) model for text,
              voice, image and video, where everyuser can explore it.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
