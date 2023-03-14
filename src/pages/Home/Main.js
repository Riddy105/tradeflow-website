import React from "react";
import investment from "../../assets/images/Investment-data-amico.svg";
import visualData from "../../assets/images/Visual data.svg";
import marketplace from "../../assets/images/marketplace.png";
import deal from "../../assets/images/deal-amico.svg";
import marketplaceMobile from "../../assets/images/marketplace-mobile.png";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
const PRODUCTS = [
  "Franchising",
  "Licensing",
  "Distributorship",
  "Strategic Partnership",
  "Agent Network",
];

const Main = (props) => {
  return (
    <main>
      <section className="bg-blueworld ">
        <div className="grid gris-cols-1 sm:grid-cols-2 gap-20 items-center container-custom py-20 lg:pt-28 ">
          <article className="text-white-200 items-center">
            <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-10">
              Expanding your business shouldn't be difficult.
            </h2>
            <p className="text-base leading-10">
              First of our kind, Tradeflow Africa is a trade-tech startup
              helping businesses expand to new markets across Africa. We are on
              a mission to help businesses grow faster by making cost-effective
              and less risky business expansion alternatives easily accessible.
              Our only message is Expand your Business, Grow your Revenue.
              Tradeflow Africa is a trade-tech startup helping businesses expand
              to new markets across Africa through its flagship digital
              solution.
            </p>
          </article>
          <img
            src={investment}
            className="lg:w-[563px] lg:h-[563px]"
            alt="investment illustration"
          ></img>
        </div>
      </section>
      <section className="py-10 md:py-20">
        <div className="text-center md:w-3/5 mx-auto">
          <h2 className="font-bold text-blue-100 text-3xl lg:text-5xl">
            Expansion Broker.
          </h2>
          <p className="text-[#333]">Our Products</p>
          <ul className="flex gap-4 md:gap-10 flex-wrap justify-center mt-5 md:mt-10">
            {PRODUCTS.map((product, index) => (
              <li
                key={index}
                className="font-bold bg-white-200 w-[168px] md:w-[33%] py-7 shadow-custom2 text-blue-100 rounded-lg text-sm sm:text-lg lg:text-2xl"
              >
                <Link to="/"> {product}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-10 justify-center md:justify-start lg:gap-20 w-11/12 mx-auto sm:ml-auto mt-20">
          <img
            src={visualData}
            alt="visual data illustration"
            className="hidden md:block w-2/5"
          ></img>
          <img
            src={marketplace}
            alt="marketplace illustration"
            className="hidden md:block"
          ></img>
          <img
            src={marketplaceMobile}
            alt="marketplace illustration "
            className="md:hidden"
          ></img>
        </div>
      </section>
      <section className="bg-blue-300 py-14 lg:py-36">
        <div className="rounded-2xl w-3/4 lg:w-3/5 mx-auto py-10 sm:py-5 px-8 flex flex-col sm:flex-row sm:justify-center items-center gap-5 bg-white-200">
          <h2 className="text-grey-100 font-bold text-xl md:text-2xl xl:text-4xl">
            Business Expansion made easy
          </h2>
          <Button paddingY="py-5" width="w-full sm:w-28 lg:w-48">
            Join our waitlist
          </Button>
        </div>
        <div className="w-11/12 md:w-3/4 mx-auto mt-5 sm:mt-10 border border-blue-100 p-10 grid grid-cols-1 sm:grid-cols-2 gap-10 rounded-3xl items-center">
          <article className="flex flex-col gap-7">
            <p className="font-medium text-base md:text-3xl">
              Story of the week
            </p>
            <h2 className="text-blue-100 font-bold text-3xl lg:text-5xl">
              Tradeflow x CinderBuild
            </h2>
            <p className="font-normal text-grey-400 text-base">
              It can be challenging to step out of the grind of everyday work to
              attend conferences, but in a fast-paced industry like marketing,
              it's vital to stay up on the trends. I went to HyperGrowth in
              Boston a while back.
            </p>
            <Link to="/">
              <Button paddingY="py-5" width="w-36 xl:w-48">
                Read Story
              </Button>
            </Link>
          </article>
          <img src={deal} alt="Done deal illustration"></img>
        </div>
      </section>
    </main>
  );
};

export default Main;
