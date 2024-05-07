import icon from "../../assets/home-featured/featured.png";
import icon1 from "../../assets/home-featured/featurdone.png";
import icon2 from "../../assets/home-featured/featuredtwo.png";
import icon3 from "../../assets/home-featured/featuredthree.png";

const Featured = () => {
  return (
    <div>
      <div className="max-w-screen-2xl mx-auto bg-white">
        <h2 className="text-[55px] font-oleo_script font-bold leading-[76.07px] text-center py-16">
          FEATURED PRODUCTS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-items-center gap-5 py-10 px-10">
          <div className="flex flex-col gap-20">
            <div>
              <h2 className="text-[48px] leading-[54.14px] font-petrona font-bold">
                Women Perfume
              </h2>
              <p className="text-[26px] font-semibold font-petrona">
                While the perfect balance of notes and strengths is crucial in
                creating.
              </p>
            </div>
            <div>
              <h2 className="text-[48px] leading-[54.14px] font-petrona font-bold">
                Pleasent Fragnance
              </h2>
              <p className="text-[26px] font-semibold font-petrona">
                Its long-lasting fragnance is exquisite and has a striking
                appeal
              </p>
            </div>
          </div>
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="flex flex-col gap-20">
            <div>
              <h2 className="text-[48px] leading-[54.14px] font-petrona font-bold">
                Organic Based
              </h2>
              <p className="text-[26px] font-semibold font-petrona">
                While the perfect balance of notes and strengths is crucial in
                creating.
              </p>
            </div>
            <div>
              <h2 className="text-[48px] leading-[54.14px] font-petrona font-bold">
                Pleasent Fragnance
              </h2>
              <p className="text-[26px] font-semibold font-petrona">
                Its long-lasting fragnance is exquisite and has a striking
                appeal
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center pt-16">
          <div className="relative">
            <img src={icon1} alt="" className="w-full" />
            <p className="text-[38px] font-Otomanopee_One font-normal leading-[55.02px] absolute text-center left-0 right-0 bottom-8">
              WOMEN’S PERFUME
            </p>
          </div>
          <div className="relative">
            <img src={icon3} alt="" className="w-full" />
            <p className="text-[38px] font-Otomanopee_One font-normal leading-[55.02px] absolute text-center left-0 right-0 bottom-8 w-[185px] mx-auto">
              MEN’S PERFUME
            </p>
          </div>
          <div className="relative">
            <img src={icon2} alt="" className="w-full" />
            <p className="text-[38px] font-Otomanopee_One font-normal leading-[55.02px] absolute text-center left-0 right-0 bottom-8">
              NATURAL PERFUME
            </p>
          </div>
          <div className="relative">
            <img src={icon3} alt="" className="w-full" />
            <p className="text-[38px] font-Otomanopee_One font-normal leading-[55.02px] absolute text-center left-0 right-0 bottom-8 w-[256px] mx-auto">
              NEW COLLECTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
