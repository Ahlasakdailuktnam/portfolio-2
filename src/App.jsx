import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./page/Homepage";
import AboutMe from "./page/AboutMe";
import MySkills from "./page/MySkills";
import Project from "./page/Project";
import Servieces from "./page/Servieces";
import CvPage from "./page/CvPage";
import Footer from "./components/Footer";

function App() {
   useEffect(() => {
    AOS.init({
      duration: 1200,   
      once: true,      
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route
          path="/home"
          element={
            <>
              <Homepage />
              <MySkills />
              <AboutMe />
              <Project />
              <Servieces />
            </>
          }
        />

        <Route path="/cv" element={<CvPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
