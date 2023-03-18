import React from "react";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";
import launching from "../../assets/images/launching-amico.svg";

const HeroSection = () => {
  return (
    <section className="hero-section my-10 lg:my-20 bg-world bg-no-repeat bg-100 md:bg-auto ">
      <article className="mb-10 lg:mb-36 flex flex-col items-center gap-4 lg:gap-9 container-custom text-center">
        <h1 className="text-grey-100 text-3xl md:text-6xl font-extrabold lg:w-4/5 min-[1300px]:w-3/5">
          Expand your <span className="text-blue-100">Business, Grow</span> your
          Revenue.
        </h1>
        <p className="text-grey-200 text-base md:text-xl">
          Gain fast and easy access to Africa's emerging economies with tools
          that simplify your business expansion.
        </p>
        <NavLink to="/form">
          <Button paddingY="py-5" width="w-36 xl:w-48">
            Join our waitlist
          </Button>
        </NavLink>
      </article>
      <section className="bg-blue-300 container-custom rounded-3xl py-10 ">
        <div className="grid grid-cols-1 items-center sm:grid-cols-2 gap-10 w-10/12 lg:w-11/12 mx-auto">
          <img src={launching} alt="Visual data illustration"></img>
          <article className="flex flex-col gap-7">
            <h2 className="text-blue-100 font-bold text-3xl lg:text-5xl">
              Tradeflow Africa launches the Tradeflow Expansion Broker
            </h2>
            <p className="font-medium text-grey-400 text-base">
              First of our kind, Tradeflow Africa is a trade-tech startup
              helping businesses expand to new markets across Africa. We are on
              a mission to help businesses grow faster by making cost-effective
              and less risky business expansion alternatives easily accessible.
            </p>
            <NavLink to="/">
              <Button paddingY="py-5" width="w-36 xl:w-48">
                Read more
              </Button>
            </NavLink>
          </article>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;
