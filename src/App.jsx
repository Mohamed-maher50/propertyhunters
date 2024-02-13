import { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Navbar/Nav";
import Advantage from "./sections/Advantage";
import AreYouReady from "./sections/AreYouReady";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import KeyInsights from "./sections/KeyInsights";
import PricingSection from "./sections/PricingSection";

import Services from "./sections/Services";
import TeamSection from "./sections/TeamSection";
import WhyUs from "./sections/WhyUs";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <Nav />
      </div>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contact />} path="/contact" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
