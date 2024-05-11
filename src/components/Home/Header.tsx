import rightimage from "../../assets/header/left.png";
import middleimage from "../../assets/header/middle.png";
import leftimage from "../../assets/header/right.png";
import leftarrow from "../../assets/arrow_logo/Arrow 1.png";
import rightarrow from "../../assets/arrow_logo/Arrow 2.png";

const Header = () => {
  return (
    <section>
      <div className="max-w-screen-2xl mx-auto h-[80vh] lg:h-[1047px] bg-gradient-backdrop py-10 relative">
        <h1 className="text-2xl md:text-4xl lg:text-[100px] text-white text-center leading-none md:leading-3 lg:leading-[110px] font-bold font-petrona w-4/5 md:w-2/3 lg:w-[1013px] mx-auto pt-16 md:pt-28 ">
          Discover Your Perfect Fragrance
        </h1>

        <div className="flex justify-center items-center gap-3 py-5 md:pt-10">
          <img src={leftarrow} alt="leftarrow" />
          <button className="w-[120px] md:w-[142px] h-[40px] md:h-[54px] border rounded-[30.5px] font-open_sans text-base md:text-2xl font-bold text-white">
            Shop Now
          </button>
          <img src={rightarrow} alt="rightarrow" />
        </div>

        <div className="absolute top-1/3 md:top-[40%] left-5 md:left-[15%] border-l-2">
          <p className="text-left text-white font-open_sans font-semibold text-base md:text-2xl pl-2">
            Discover the perfect
          </p>
          <p className="text-left text-white font-open_sans font-semibold text-base md:text-2xl py-3 pl-2">
            fragrance for you with our
          </p>
          <p className="text-left text-white font-open_sans font-semibold text-base md:text-2xl pl-2">
            wide selection of perfumes.
          </p>
        </div>

        <div className="absolute top-1/4 md:top-[35%] right-5 md:right-[15%]  text-white pt-10">
          <p className="flex flex-col leading-10">
            <span className="text-2xl md:text-[48px] font-bold font-petrona">
              90+
            </span>{" "}
            <span className="text-base md:text-2xl font-bold font-petrona">
              Perfumes
            </span>
          </p>
          <p className="flex flex-col pt-5 md:pt-8 leading-10">
            <span className="text-2xl md:text-[48px] font-bold font-petrona">
              15M+
            </span>
            <span className="text-base md:text-2xl font-bold font-petrona">
              Customers
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2 absolute bottom-5 left-0 right-0 justify-center top-1/2 px-5 md:px-10">
          <img
            src={leftimage}
            alt="leftimage"
            className="w-1/2 lg:w-[480px] lg:h-[413px]"
          />
          <img
            src={rightimage}
            alt="rightimage"
            className="w-1/2 lg:w-[492px] lg:h-[421px]"
          />
        </div>

        <div className="absolute left-0 right-0 top-1/2 flex justify-center items-center py-5 ">
          <img
            src={middleimage}
            alt="middleimage"
            className="w-1/3 md:w-[280px] lg:w-[358px] lg:h-[493px] pb-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
