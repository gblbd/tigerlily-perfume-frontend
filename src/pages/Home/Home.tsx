import { useContext } from "react";

import { DarkModeContext } from "../../components/DarkModeContext/DarkModeContext";
import Header from "../../components/Home/Header";
import SectionTwo from "../../components/Home/SectionTwo";
import Featured from "../../components/Home/Featured";
import Brands from "../../components/Home/Brands";
import Hero from "../../components/Home/Hero";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`${darkMode ? "bg-black" : ""}`}>
      <Header />
      <SectionTwo />
      <Featured />
      <Brands />
      <Hero />
    </div>
  );
};

export default Home;
