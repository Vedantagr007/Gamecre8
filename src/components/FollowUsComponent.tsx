export const FollowUsComponent = () => {
  return (
    <>
      <div className="row px-4">
        <div className="col-md-6">
          <div className="h3 font-weight-bold">
            Discover the thrilling AI gaming in today's world. Follow us on
          </div>
          <div className="d-flex mt-2">
            <a href="https://www.linkedin.com/groups/13070450/" target="_blank">
              <img src="LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://www.instagram.com/gamecre8/profilecard/?igsh=MXA0Z2QwaTg0NjQ4aw=="
              target="_blank"
              className="ml-3"
            >
              <img src="Instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h3 font-weight-bold">
            Stay updated with the latest game news and exclusive content.
          </div>
          <div className="mt-2">
            <input
              type="email"
              className="form-control form-control-sm mb-2"
              placeholder="Your email address"
              required
            />
            <button className="btn btn-primary btn-sm">
              Join now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
