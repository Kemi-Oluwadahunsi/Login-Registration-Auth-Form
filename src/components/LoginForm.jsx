import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  auth,
  signInWithEmailAndPassword,
  handleGoogleSignIn,
} from "./firebase";
import { FcGoogle } from "react-icons/fc";
import { getFirestore, collection, getDocs, where } from "firebase/firestore";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = getFirestore();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const navigate = useNavigate()

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Determining whether input is email or username
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      let signInCredential;

      if (isEmail) {
        // Signing in with email and password
        signInCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        // Performing a custom logic to authenticate with username (query database)
        const userData = await getUserByUsername(email);

        if (!userData) {
          toast.error("User not found");
        }

        // Validating the password
        const isPasswordValid = await validatePassword(
          userData.password,
          password
        );

        if (!isPasswordValid) {
          toast.error("Invalid password");
        }

        // If password is valid, sign in the user
        signInCredential = userData;
      }
      setEmail("");
      setPassword("");
      // If sign-in is successful, display success message
      console.log("Sign-in successful", signInCredential);
      toast.success("Sign-in successful");
      setTimeout(() => {
        navigate("/landing-page");
      }, 4000);
    } catch (error) {
      // Handling sign-in errors
      console.error("Error signing in:", error.message);
      toast.error("Error signing in: User not Found");
    }
  };

  const getUserByUsername = async (username) => {
    try {
      // Use Firestore query to get user data by username
      const querySnapshot = await getDocs(
        collection(db, "users"),
        where("username", "==", username)
      );

      if (querySnapshot.empty) {
        // If no user found with the given username
        return null;
      }

      // Assuming username is unique, so there should be only one document
      const userData = querySnapshot.docs[0].data();
      return userData;
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Incorrect Username");
    }
  };

  const validatePassword = async (storedPassword, providedPassword) => {
    try {
      // Compare if the provided password with the password stored in the database are same
      const match = storedPassword === providedPassword;
      return match;
    } catch (error) {
      console.error("Error validating password:", error);
      toast.error("Password Incorrect");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="flex w-full md:w-[70%] lg:w-[70%] sm:p-6 lg:shadow-lg lg:shadow-teal-100 ">
        <div className="back2 flex-1 flex rounded-tl-lg rounded-bl-lg items-center justify-center text-[3em] text-[#191a19] font-bold">
          WELCOME BACK
        </div>
        <section className="bg-gray-900 flex-1 justify-center rounded-tr-lg rounded-br-lg sm:rounded-tl-lg sm:rounded-bl-lg ">
          <form
            className="w-full flex flex-col gap-1 mx-auto sm:px-4 lg:px-[15%] md:px-[9%] py-[2em]"
            onSubmit={handleSignIn}
          >
            <h2 className=" sm:text-2xl md:text-3xl lg:text-4xl text-[#ECF4E5] font-bold text-center">
              SIGN IN
            </h2>

            <div className="flex flex-col text-gray-300 py-2">
              <label>Email/Username</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                value={email}
                placeholder="Enter your email or username"
              />
            </div>

            <div className="flex flex-col text-gray-300 py-2">
              <label>Password</label>
              <div className="relative">
                <input
                  className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none w-full"
                  type={isPwdVisible ? "text" : "password"}
                  id="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>

                <div
                  className=" absolute top-4 left-[90%] z-20"
                  onClick={() =>
                    setIsPwdVisible((prevIsVisible) => !prevIsVisible)
                  }
                >
                  {isPwdVisible ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      color="#A6A6A6"
                      className="text-sm"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      color="#A6A6A6"
                      className="text-sm"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between text-gray-300 py-2">
              <p className="flex items-center">
                <input className="mr-2" type="checkbox" /> Remember Me
              </p>
              <p>Forgot Password?</p>
            </div>

            {/* "Sign In" button */}
            <div className="flex flex-col gap-2">
              <button className="w-full mt-2 py-2 cursor-pointer bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">
                Sign In
              </button>

              <span className="text-gray-300  grid place-content-center">
                or
              </span>
              <button
                onClick={handleGoogleSignIn}
                className=" flex justify-center gap-3 w-full py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              >
                <FcGoogle className="text-2xl" />
                Sign In with Google
              </button>

              <p className="text-gray-300 flex justify-center items-center gap-2">
                Not a User?
                <Link to="/register">
                  <span className="line hover:text-teal-600 font-bold text-lg underline decoration-teal-600 underline-offset-8 decoration-4 ">
                    Register
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </section>
      </div>
      <div className="z-[10000]">
        <ToastContainer position="top-right" autoClose={5000} />
      </div>
    </div>
  );
};
export default Login;
