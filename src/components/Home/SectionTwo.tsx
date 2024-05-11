import flower from "../../assets/homesectiontwo/kk 1.png";
import perfume from "../../assets/homesectiontwo/perfume.png";
import icon from "../../assets/homesectiontwo/637457.png";

const SectionTwo = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-[#F7F7F7] py-10 relative">
        <img
          src={flower}
          alt=""
          className="absolute top-0 right-0 w-1/4 md:w-[379px]"
        />
        <div className="pt-10 ml-5 md:ml-16 w-11/12 md:w-[610px]">
          <h2 className="font-open_sans text-2xl md:text-4xl lg:text-[55px] font-bold leading-normal md:leading-[74.9px] ">
            CREATE THE ILLUSION OF LUXURY
          </h2>
          <p className="text-lg md:text-2xl font-semibold font-open_sans pt-3">
            We begin the process of natural fragrance making by learning about
            the ingredients you’ll use.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center items-center pt-10">
          <div>
            <img
              src={perfume}
              alt="perfume"
              className="w-11/12 md:w-full h-fit md:h-[556px] mx-auto"
            />
          </div>
          <div className="flex flex-col gap-10 w-11/12 md:w-full">
            <div>
              <img
                src={icon}
                alt=""
                className="w-[50px] h-auto md:w-[94px] md:h-[94px]"
              />
              <p className="flex items-center gap-5 ">
                <span className="font-petrona text-2xl md:text-[48px] font-semibold">
                  250+
                </span>{" "}
                <span className="font-petrona text-xl md:text-[32px] font-semibold">
                  Autenthic product for customer
                </span>
              </p>
            </div>
            <div>
              {" "}
              <img
                src={icon}
                alt=""
                className="w-[50px] h-auto md:w-[94px] md:h-[94px]"
              />
              <p className="flex items-center gap-5 ">
                <span className="font-petrona text-2xl md:text-[48px] font-semibold">
                  50
                </span>{" "}
                <span className="font-petrona text-xl md:text-[32px] font-semibold">
                  Outlet Store in Indonesia
                </span>
              </p>
            </div>
            <div>
              {" "}
              <img
                src={icon}
                alt=""
                className="w-[50px] h-auto md:w-[94px] md:h-[94px]"
              />
              <p className="flex items-center gap-5 ">
                <span className="font-petrona text-2xl md:text-[48px] font-semibold">
                  136
                </span>{" "}
                <span className="font-petrona text-xl md:text-[32px] font-semibold">
                  Countries with Free Shipping
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
