import React from "react";
import investment from "../../assets/images/Investment-data-amico.svg";
import visualData from "../../assets/images/Visual data.svg";
import marketplace from "../../assets/images/marketplace.png";
import marketplaceMobile from "../../assets/images/marketplace-mobile.png";
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
      <section className="bg-blueworld">
        <div className="grid gris-cols-1 sm:grid-cols-2 gap-20 container-custom py-20 lg:pt-28 ">
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
          <img src={investment} className="lg:w-[563px] lg:h-[563px]"></img>
        </div>
      </section>
      <section className="py-10 md:py-20">
        <div className="text-center md:w-3/5 mx-auto">
          <h2 className="font-bold text-blue-100 text-3xl lg:text-5xl">
            Expansion Broker.
          </h2>
          <p className="text-[#333]">Our Products</p>
          <ul className="flex gap-4 md:gap-10 flex-wrap justify-center mt-5 md:mt-10">
            {PRODUCTS.map((product) => (
              <li className="font-bold bg-white-200 w-[168px] md:w-[33%] py-7 shadow-custom2 text-blue-100 rounded-lg text-sm sm:text-base">
                {product}
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
      <section>
        <div>
          <h2></h2>
        </div>
      </section>
    </main>
  );
};

export default Main;
