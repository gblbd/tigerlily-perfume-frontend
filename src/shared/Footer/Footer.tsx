import logo from "../../assets/logo/logo.png";
import "./Footer.css";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="max-w-screen-2xl mx-auto ">
      <div className="bg-[#6B6B6B] pt-10 pb-1 px-5 ">
        <div className=" grid grid-cols-1 md:grid-cols-3 justify-items-between items-center">
          <div className="mb-10 w-11/12">
            <div className="flex justify-center items-center">
              <img
                src={logo}
                alt=""
                className="w-1/2 md:w-[370px] flex justify-center"
              />
            </div>
          </div>

          <div className="flex justify-evenly gap-0 md:gap-16 mb-16">
            <div>
              <h3 className="text-lg md:text-[24px] font-petrona font-extrabold text-white">
                PRODUCT
              </h3>
              <ul>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Remote</a>
                </li>

                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Debugging</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">QTA Updates</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Device</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Monitoring</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-[24px] font-petrona font-extrabold text-white">
                RESOURCES
              </h3>
              <ul>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Flag</a>
                </li>

                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Community</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Docs</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Product Update</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-evenly gap-0  md:gap-16 mb-16">
            <div>
              <h3 className="text-lg md:text-[24px] font-petrona font-extrabold text-white">
                COMPANY
              </h3>
              <ul>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">About Us</a>
                </li>

                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Careers</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Customers</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Partners</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg md:text-[24px] font-petrona font-extrabold text-white">
                PRIVACY
              </h3>
              <ul>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Remote</a>
                </li>

                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Debugging</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">QTA Updates</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white">
                  <a href="#">Device</a>
                </li>
                <li className="text-sm md:text-[18px] font-petrona font-extrabold text-white py-3">
                  <a href="#">Monitoring</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#353535] py-8">
        <div className="row grid grid-cols-1 justify-items-center items-center">
          <div className="my-auto">
            <p className="text-base md:text-[22px] font-petrona text-white">
              Copyright Tigerlily @{getCurrentYear()}. All rights reserved.
            </p>
          </div>

          {/* <div className="hidden md:block">
            <div>
              <ul className="flex justify-end  items-center gap-10 ">
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Home</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Terms</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Privacy</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Policy</a>
                </li>
                <li className="text-primary hover:text-brand duration-300">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
