import rightimage from "../../assets/header/left.png";
import middleimage from "../../assets/header/middle.png";
import leftimage from "../../assets/header/right.png";
import leftarrow from "../../assets/arrow_logo/Arrow 1.png";
import rightarrow from "../../assets/arrow_logo/Arrow 2.png";

const Header = () => {
  return (
    <section className="relative">
      <div className="max-w-screen-2xl mx-auto h-[1047px] bg-gradient-backdrop py-10">
        <h1 className="text-[100px] text-white text-center leading-[110px] font-bold font-petrona w-[1013px] mx-auto pt-28 ">
          Discover Your Perfect Fragrance
        </h1>

        <div className="flex justify-center items-center gap-3 pt-10">
          <img src={leftarrow} alt="leftarrow" />
          <button className="w-[142px] h-[54px] border rounded-[30.5px] font-open_sans text-2xl font-bold text-white">
            Shop Now
          </button>
          <img src={rightarrow} alt="rightarrow" />
        </div>

        <div className="absolute top-[40%] left-[20%] border-l-2">
          <p className="text-left text-white font-open_sans font-semibold text-2xl pl-2">
            Discover the perfect
          </p>
          <p className="text-left text-white font-open_sans font-semibold text-2xl py-3 pl-2">
            fragrance for you with our
          </p>
          <p className="text-left text-white font-open_sans font-semibold text-2xl pl-2">
            wide selection of perfumes.
          </p>
        </div>

        <div className="absolute top-2/3 left-[20%] text-white pt-10">
          <p className="flex flex-col leading-10">
            <span className="text-[48px] font-bold font-petrona">90+</span>{" "}
            <span className="text-2xl font-bold font-petrona">Perfumes</span>
          </p>
          <p className="flex flex-col pt-8 leading-10">
            <span className="text-[48px] font-bold font-petrona">15M+</span>
            <span className="text-2xl font-bold font-petrona">Customers</span>
          </p>
        </div>

        <div className="flex items-center gap-2 absolute bottom-5 left-1/4 px-10">
          <img
            src={leftimage}
            alt="leftimage"
            className="w-[480px] h-[413px]"
          />
          <img
            src={rightimage}
            alt="rightimage"
            className="w-[492px] h-[421px]"
          />
        </div>

        <div className="absolute left-[44%] py-5">
          <img
            src={middleimage}
            alt="middleimage"
            className="w-[358px] h-[493px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
