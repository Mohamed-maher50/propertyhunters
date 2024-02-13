import "./App.css";
import Nav from "./components/Navbar/Nav";
import Advantage from "./sections/Advantage";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import PricingSection from "./sections/PricingSection";

import Services from "./sections/Services";
import TeamSection from "./sections/TeamSection";

function App() {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <Nav />
      </div>
      <section>
        <HeroSection />
      </section>
      <ExperienceSection />
      <Services />
      <Advantage />
      <PricingSection />
      <TeamSection />
    </div>
  );
}

export default App;
