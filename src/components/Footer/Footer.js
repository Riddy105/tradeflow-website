import React from "react";
import whiteLogo from "../../assets/images/Tradeflow-logo-white.png";
import Instagram from "../../assets/icons/Instagram.png";
import Mail from "../../assets/icons/Mail.png";
import Twitter from "../../assets/icons/Twitter.png";
import LinkedIn from "../../assets/icons/LinkedIn.png";

const Footer = () => {
  const SOCIALS = [
    {
      img: Mail,
      link: "talktous@tradeflow.africa",
    },
    {
      img: Instagram,
      link: "https://instagram.com/tradeflow.africa?igshid=YmMyMTA2M2Y=",
    },
    {
      img: LinkedIn,
      link: "https://www.linkedin.com/company/tradeflow-africa/",
    },
    {
      img: Twitter,
      link: "https://twitter.com/TradeflowAfrica?t=36N6pz2cfE5f-4_8Q7KXYw&s=08",
    },
  ];
  return (
    <footer className="bg-blue-300 pb-10">
      <div className="bg-blue-100 w-[95%] mx-auto rounded-lg flex flex-col items-center pt-5 md:pt-10 pb-3 md:pb-6">
        <img
          src={whiteLogo}
          className="w-[150px] h-[60px] object-contain md:w-auto md:h-auto mb-7"
          alt="Tradeflow logo"
        ></img>
        <div>
          <div className="flex flex-row ">
            <input
              placeholder="Email"
              className="text-white-100 pl-3 font-semibold focus:outline-none bg-transparent placeholder:text-grey-600 border border-white-200 rounded-l-md h-12  md:w-[327px]"
            ></input>
            <button className="bg-white-200 text-blue-100 w-20 text-center rounded-r-md">
              Submit
            </button>
          </div>
          <p className="font-semibold text-white-100 mt-3">
            Subscribe to our newsletter
          </p>
        </div>
        <ul className="flex gap-4 md:gap-8 items-end my-8 md:my-12">
          {SOCIALS.map((social, index) => (
            <li key={index}>
              <a href={social.link} target="_blank">
                <img
                  src={social.img}
                  alt={`${social} Icon`}
                  className="w-6 object-contain sm:w-auto"
                ></img>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-white-100">© 2023 Tradeflow Africa</p>
      </div>
    </footer>
  );
};

export default Footer;
