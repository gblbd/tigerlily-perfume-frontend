import { Link } from "react-router-dom";
import hero from "../../assets/hero/hero.png";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-white relative">
        <img
          src={hero}
          alt=""
          className="w-full h-[450px] md:h-[823px] bg-cover"
        />
        <div className="absolute top-10 md:top-16 left-7  md:left-16">
          <div className="w-11/12 md:w-[642px] h-auto md:h-[398px] bg-white flex flex-col justify-center px-10 py-5">
            <h2 className="text-xl md:text-[38px] font-Otomanopee_One leading-normal md:leading-[55.02px] font-normal w-auto md:w-[350px]">
              ALL-NATURAL MADE WITH LOVE
            </h2>
            <p className="text-base md:text-[28px] font-bold font-petrona pt-5 leading-[31.58px]">
              Its long-lasting fragnance is exquisite and has a striking appeal
              Its long-lasting is exquisite and has a striking appeal Its long-
              lasting fragnance is exquisite and has a Its long-lasting is.
            </p>
          </div>
          <div className="flex justify-end w-11/12 md:w-[642px]">
            <Link to={"/"} className="">
              <button className="relative w-[120px] md:w-[249px] h-10 md:h-[74px] ">
                <p className="absolute left-0 right-0 top-0 bottom-0 z-10  flex justify-center items-center gap-2 text-white">
                  <span className="text-sm md:text-[28px] font-petrona font-black">
                    SHOP NOW
                  </span>
                  <FaArrowRight className="text-base md:text-2xl" />
                </p>
                <div className="absolute inset-0 bg-[#6C066E] opacity-50"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
