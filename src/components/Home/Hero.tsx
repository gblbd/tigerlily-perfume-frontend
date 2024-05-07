import hero from "../../assets/hero/hero.png";

const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-white relative">
        <img src={hero} alt="" className="w-full h-[823px] bg-cover" />
        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;
