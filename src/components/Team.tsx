export const Team = () => {
  return (
    <>
      <div className="mt-4" id="team-section">
        <div className="d-flex justify-content-center display-4 fw-bold mb-3">
          Meet Our Team
        </div>
        <div className="text-center text-muted small">
          <div>
            Behind every great game is a talented team of passionate individuals.
          </div>
          <div>
            Meet the creative minds and technical wizards who bring our AI gaming world to life.
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">Co-Founder & Team Lead</div>
            <div className="col-5 text-center">Tanmay Dumbre</div>
            <div className="col-2 text-end">
              <img src="Tanmay.svg" alt="Tanmay" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">UI/UX Designer</div>
            <div className="col-5 text-center">Motoni Ayodele</div>
            <div className="col-2 text-end">
              <img src="Motoni.svg" alt="Motoni" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">AI Developer</div>
            <div className="col-5 text-center">Bittu Singh</div>
            <div className="col-2 text-end">
              <img src="Bittu.svg" alt="Bittu" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">Frontend Developer</div>
            <div className="col-5 text-center">Vivek Jadhav</div>
            <div className="col-2 text-end">
              <img
                src="vivek.JPG"
                alt="Vivek"
                width="48"
                height="48"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">Senior AI Developer</div>
            <div className="col-5 text-center">Rahul Kumar</div>
            <div className="col-2 text-end">
              <img src="Rahul.svg" alt="Rahul" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">AI Researcher</div>
            <div className="col-5 text-center">Sagar Vincent</div>
            <div className="col-2 text-end">
              <img src="Sagar.svg" alt="Sagar" />
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center border-bottom py-3 mx-4">
            <div className="text-secondary col-5">Senior AI Developer</div>
            <div className="col-5 text-center">Adarsh</div>
            <div className="col-2 text-end">
              <img src="Adarsh.svg" alt="Adarsh" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom mt-4 mx-4"></div>
    </>
  );
};
