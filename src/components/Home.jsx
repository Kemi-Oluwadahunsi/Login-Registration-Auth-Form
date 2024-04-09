import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className=" homebg h-full flex items-center justify-center">
        <div className=" bg-gray-800 bg-opacity-90 flex flex-col sm:gap-[1em] gap-[3em] items-center justify-center sm:w-[90%] md:w-[80%] lg:w-[50%] p-10 rounded-tl-3xl rounded-br-3xl">
          <h2 className=" mx-auto sm:w-full md:w-full lg:w-[80%] text-center   md:text-3xl lg:text-5xl sm:text-2xl text-[#e1e9e5] font-extrabold ">
            NEED AN ACCOUNT?
          </h2>

          <button className=" text-gray-50 bg-gradient-to-r from-[#1e2855] to-[#381d53]  md:text-3xl lg:text-5xl sm:text-xl py-5 px-8 rounded-md font-bold lg:hover-transform lg:hover:scale-105">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Homepage;
