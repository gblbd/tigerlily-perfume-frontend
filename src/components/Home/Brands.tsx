import icon1 from "../../assets/icon/spotify.png";
import icon2 from "../../assets/icon/hyundai.png";
import icon3 from "../../assets/icon/lbrands.png";

const Brands = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-[#D9D9D9]">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 justify-items-center items-center py-3">
          <img src={icon1} alt="" className="w-1/2 md:w-full" />
          <img src={icon2} alt="" className="w-1/2 md:w-full" />
          <img src={icon3} alt="" className="w-1/2 md:w-full" />
          <img src={icon1} alt="" className="w-1/2 md:w-full" />
          <img src={icon2} alt="" className="w-1/2 md:w-full" />
          <img src={icon3} alt="" className="w-1/2 md:w-full" />
        </div>
      </div>
    </div>
  );
};

export default Brands;
