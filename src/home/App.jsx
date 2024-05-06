import React from "react";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/homeComponents/Benefits";
import Collaboration from "../components/homeComponents/Collaboration";
import Footer from "../components/generalComponents/Footer";
import Hero from "../components/homeComponents/Hero";
import Pricing from "../components/homeComponents/Pricing";
import Roadmap from "../components/homeComponents/Roadmap";
import Services from "../components/homeComponents/Services";
import Header from "../components/generalComponents/Header";

function App() {
  const navigationItems = [
    { id: 0, url: "#features", title: "Features" },
    { id: 1, url: "#how-to-use", title: "How to use" },
    { id: 2, url: "#pricing", title: "Pricing" },
    { id: 3, url: "#roadmap", title: "Roadmap" },
  ];

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header navigation={navigationItems} />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
}

export default App;
