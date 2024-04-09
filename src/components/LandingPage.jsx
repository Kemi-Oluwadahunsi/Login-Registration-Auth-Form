import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Logout Successful!");
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };
  return (
    <div className="bg-[#10416A]">
      <div className="flex items-center justify-center h-screen bg-hero-pattern bg-center bg-contain bg-no-repeat">
        <section className="flex flex-col gap-10 justify-center items-center text-5xl">
          <h1 className="text-[#e1e9e5] py-10 px-8 font-bold bg-[#318a96] rounded-md">
            Success Logging In!
          </h1>

          <p className=" text-gray-50 bg-gradient-to-r from-[#1e2855] to-[#381d53] py-5 px-8 rounded-md font-bold lg:hover-transform lg:hover:scale-105">
            Welcome To KodeMaven
          </p>

          <button
            onClick={handleClick}
            className=" text-gray-50 bg-gradient-to-r from-[#318a96] to-[#381d53] py-5 px-8 rounded-md font-bold lg:hover-transform lg:hover:scale-105"
          >
            Logout
          </button>
        </section>
      </div>
      <div className="z-[10000]">
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};

export default LandingPage;
