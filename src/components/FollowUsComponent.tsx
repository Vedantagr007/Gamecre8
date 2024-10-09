export const FollowUsComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-16 gap-24">
        <div className="font-orelega text-3xl">
          <div className="flex justify-start gap-2">
            Discover the thrilling AI gaming in today's world. Follow us on
          </div>
          <div className="flex mt-2">
              <a href="">
                <img src="LinkedIn.svg" />
              </a>
              <a href="">
                <img src="Instagram.svg" />
              </a>
          </div>
        </div>
        <div className="font-orelega text-3xl">
          <div>
            Stay updated with the latest game news and exclusive content.
          </div>
          <div>
            <div>
              <div>
                <input
                  type="email"
                  className="py-2 px-4 text-sm text-gray-950 border border-gray-300 rounded-md bg-gray-200"
                  placeholder="Your email address"
                  required
                />
                <button className="bg-[#7C49BE] font-orelega text-white text-sm  p-2 m-1 rounded-md">
                  Join now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
