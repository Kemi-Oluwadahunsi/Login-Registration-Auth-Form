import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import Homepage from "./components/Home";
import Register from "./components/Register";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <>
      <div className="bg-[#e2cbb3] h-screen w-screen">
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing-page" element={<LandingPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
