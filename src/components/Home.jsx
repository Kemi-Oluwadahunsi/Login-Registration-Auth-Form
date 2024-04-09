import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className=" homebg h-full flex items-center justify-center">
        <div className=" bg-gray-800 bg-opacity-90 flex flex-col gap-[3em] items-center justify-center w-[50%] py-10 rounded-tl-3xl rounded-br-3xl">
          <h2 className=" mx-auto p-10 w-[80%] text-center   md:text-3xl lg:text-5xl sm:text-sm text-[#e1e9e5] font-extrabold ">
            NEED AN ACCOUNT?
          </h2>

          <button className=" text-gray-50 bg-gradient-to-r from-[#1e2855] to-[#381d53] text-5xl py-5 px-8 rounded-md font-bold lg:hover-transform lg:hover:scale-105">
            <Link to="/register">Sign Up</Link>
          </button>
        </div>
      </div>
    </>
  );
}
export default Homepage;
