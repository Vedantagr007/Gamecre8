export const Team = () => {
  return (
    <>
      <div className="mt-16">
        <div className="flex justify-center font-orelega text-4xl ">
          Meet Our Team
        </div>
        <div className="font-orelega text-[#545454] text-center text-xs mt-4">
          <div>
            Behind every great game is a talented team of passionate
            individuals.
          </div>
          <div>
            Meet the creative minds and technical wizards who bring our AI
            gaming <br></br> world to life.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-around font-orelega gap-4 mt-8">
        <div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">Co-Founder & Team Lead</div>
            <div className="w-2/5 text-center">Tanmay Dumbre</div>
            <div className="w-1/5 flex justify-end flex-shrink-0">
              <img src="Tanmay.svg" alt="Tanmay" />
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">UI/UX Designer</div>
            <div className="w-2/5 text-center">Motoni Ayodele</div>
            <div className="w-1/5 flex justify-end  flex-shrink-0">
              <img src="Motoni.svg" alt="Motoni" />
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">AI Developer</div>
            <div className="w-2/5 text-center">Bittu Singh</div>
            <div className="w-1/5 flex justify-end  flex-shrink-0">
              <img src="Bittu.svg" alt="Bittu" />
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">Frontend Developer</div>
            <div className="w-2/5 text-center">Vivek Jadhav</div>
            <div className="w-1/5 flex justify-end flex-shrink-0">
              <img
                src="vivek.JPG"
                alt="Vivek"
                width={"48px"}
                height={"48px"}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">Senior AI Developer</div>
            <div className="w-2/5 text-center">Rahul Kumar</div>
            <div className="w-1/5 flex justify-end flex-shrink-0">
              <img src="Rahul.svg" alt="Tanmay" />
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">Ai researcher</div>
            <div className="w-2/5 text-center">Sagar Vincent</div>
            <div className="w-1/5 flex justify-end  flex-shrink-0">
              <img src="Sagar.svg" alt="Motoni" />
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">Senior AI Developer</div>
            <div className="w-2/5 text-center">Adarsh</div>
            <div className="w-1/5 flex justify-end  flex-shrink-0">
              <img src="Adarsh.svg" alt="Bittu" />
            </div>
          </div>
          <div className="flex justify-between items-center border-b-2 py-3 mx-12">
            <div className="text-gray-400 w-2/5">Backend Developer</div>
            <div className="w-2/5 text-center">Aditya Kumar</div>
            <div className="w-1/5 flex justify-end flex-shrink-0">
              <img src="Tanmay.svg" alt="Aditya" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-2 mt-14 mx-12"></div>
    </>
  );
};
