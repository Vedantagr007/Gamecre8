export const ProductSection = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-2 my-4" id="products-section">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="50px"
          width="50px"
          viewBox="0 -960 960 960"
          fill="#7C49BE"
        >
          <path d="M440-183v-274L200-596v274l240 139Zm80 0 240-139v-274L520-457v274Zm-80 92L160-252q-19-11-29.5-29T120-321v-318q0-22 10.5-40t29.5-29l280-161q19-11 40-11t40 11l280 161q19 11 29.5 29t10.5 40v318q0 22-10.5 40T800-252L520-91q-19 11-40 11t-40-11Zm200-528 77-44-237-137-78 45 238 136Zm-160 93 78-45-237-137-78 45 237 137Z" />
        </svg>
        <div className="h5 fw-bold text-center" style={{ color: '#7C49BE' }}>Product</div>
      </div>

      {/* Product Image or Description */}
      <div className="rounded-3 bg-secondary" style={{ height: '300px', margin: '2rem 1rem' }}></div>

      {/* Model Section */}
      <div className="d-flex justify-content-center align-items-center gap-2 my-4">
        <div className="h5 fw-bold text-center" id="model-section">Model</div>
        <div className="h-20 w-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 100 125"
            fill="#7C49BE"
          >
            <g transform="translate(0,-952.36218)">
              <path
                d="m 49.919586,961.36082 a 1.150115,1.150115 0 0 0 -0.5,0.15625 l -19.6875,11.375 a 1.150115,1.150115 0 0 0 -0.0937,0.0625 1.150115,1.150115 0 0 0 -0.0625,0.0625 1.150115,1.150115 0 0 0 -0.1875,0.1875 1.150115,1.150115 0 0 0 -0.0312,0.0625 1.150115,1.150115 0 0 0 -0.0625,0.0937 1.150115,1.150115 0 0 0 -0.125,0.4375 1.150115,1.150115 0 0 0 0,0.0937 1.150115,1.150115 0 0 0 0,0.15625 l 0,21.9375 -19.125,11.06248 a 1.150115,1.150115 0 0 0 -0.0625,0.062 1.150115,1.150115 0 0 0 -0.125,0.062 1.150115,1.150115 0 0 0 -0.0625,0.062 1.150115,1.150115 0 0 0 -0.0312,0.031 1.150115,1.150115 0 0 0 -0.0312,0.062 1.150115,1.150115 0 0 0 -0.0312,0.031 1.150115,1.150115 0 0 0 -0.0312,0 1.150115,1.150115 0 0 0 -0.0625,0.125 1.150115,1.150115 0 0 0 0,0.031 1.150115,1.150115 0 0 0 -0.0312,0.062 1.150115,1.150115 0 0 0 0,0.031 1.150115,1.150115 0 0 0 -0.0312,0.094 1.150115,1.150115 0 0 0 0,0.031 1.150115,1.150115 0 0 0 -0.0312,0.062 1.150115,1.150115 0 0 0 0,0.062 1.150115,1.150115 0 0 0 0,0.062 1.150115,1.150115 0 0 0 0,0.062 1.150115,1.150115 0 0 0 0,0.1563 l 0,22.5937 a 1.150115,1.150115 0 0 0 0.59375,1 l 19.5625,11.2813 a 1.150115,1.150115 0 0 0 0.0937,0.062 l 0.0312,0.031 a 1.150115,1.150115 0 0 0 0.0625,0.031 1.150115,1.150115 0 0 0 0.0312,0.031 1.150115,1.150115 0 0 0 0.0625,0.031 1.150115,1.150115 0 0 0 0.0625,0 1.150115,1.150115 0 0 0 0.0625,0.031 1.150115,1.150115 0 0 0 0.0312,0 1.150115,1.150115 0 0 0 0.0937,0.031 1.150115,1.150115 0 0 0 0.0312,0 1.150115,1.150115 0 0 0 0.0625,0 1.150115,1.150115 0 0 0 0.0625,0 1.150115,1.150115 0 0 0 0.0625,0 1.150115,1.150115 0 0 0 0.0312,0 1.150115,1.150115 0 0 0 0.40625,-0.094 1.150115,1.150115 0 0 0 0.21875,-0.1563 l 19,-10.9375 18.96875,10.9375 a 1.150115,1.150115 0 0 0 0.0937,0.062 l 0.0312,0.031 a 1.150115,1.150115 0 0 0 0.0625,0.031 1.150115,1.150115 0 0 0 0.0312,0.031 1.150115,1.150115 0 0 0 0.0625,0.031 1.150115,1.150115 0 0 0 0.0625,0.031 1.150115,1.150115 0 0 0 0.0625,0 1.150115,1.150115 0 0 0 0.15625,0.031 1.150115,1.150115 0 0 0 0.0625,0 1.150115,1.150115 0 0 0 0.25,0 1.150115,1.150115 0 0 0 0.0312,0 1.150115,1.150115 0 0 0 0.3125,-0.094 1.150115,1.150115 0 0 0 0.0625,-0.062 1.150115,1.150115 0 0 0 0.21875,-0.125 l 19.46875,-11.25 a 1.150115,1.150115 0 0 0 0.59375,-1 l 0,-22.5937 a 1.150115,1.150115 0 0 0 -0.0937,-0.5938 1.150115,1.150115 0 0 0 0,-0.062 1.150115,1.150115 0 0 0 -0.3125,-0.4062 1.150115,1.150115 0 0 0 -0.0625,-0.031 1.150115,1.150115 0 0 0 -0.0312,-0.031 1.150115,1.150115 0 0 0 -0.0625,-0.031 1.150115,1.150115 0 0 0 0,-0.031 l -19.15625,-11.06253 0,-21.78125 a 1.150115,1.150115 0 0 0 -0.53125,-1.3125 l -19.71875,-11.375 a 1.150115,1.150115 0 0 0 -0.65625,-0.15625 z m 0.0937,2.5 17.40625,10.03125 -17.40625,10.03125 -17.40625,-10.03125 17.40625,-10.03125 z m -18.5625,12.03125 17.40625,10.0625 0,20.09373 -17.40625,-10.06248 0,-20.09375 z m 37.09375,0 0,20.09375 -17.40625,10.06248 0,-20.09373 9.71875,-5.625 7.6875,-4.4375 z"
                fill="#000000"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Product Models */}
      <div className="row g-4 px-4 py-3">
        {/* Model 1 */}
        <div className="col-12 col-md-6">
          <div className="card p-3">
            <div className="h5">Eyas model 1.0 (free)</div>
            <div className="text-muted small mt-2">
              It's a free text-to-game model that can run on basic games. It's a mind-trained MLGM (mini language gaming model).
            </div>
          </div>
        </div>

        {/* Model 2 */}
        <div className="col-12 col-md-6">
          <div className="card p-3">
            <div className="h5">
              Hawk Multimodel (paid) - <span className="text-primary">coming soon</span>
            </div>
            <div className="text-muted small mt-2">
              <div>It's a paid gaming model that can run basic games.</div>
              <div>
                It's a large-trained LGM (Large Gaming Model) for text, voice, image, and video, where every user can explore it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};