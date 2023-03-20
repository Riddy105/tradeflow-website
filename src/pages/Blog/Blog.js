import React from "react";
import map from "../../assets/images/digital-world.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <section className="bg-blue-100 relative mt-20">
        <img
          src={map}
          alt="World map"
          className="mix-blend-multiply w-full h-[200px] md:h-[500px]"
        ></img>
        <h2 className="text-center font-extrabold text-xl md:text-5xl absolute top-[50%] left-[50%] translate-x-[-50%] text-white-200 leading-[1.1] ">
          Tradeflow Africa launches Tradeflow Expansion Broker
        </h2>
      </section>
      <article className="container-custom font-medium flex flex-col gap-4 md:gap-8 text-grey-400 py-7 md:py-14 text-base md:text-lg">
        <p>
          Tradeflow Expansion Broker is a marketplace for established businesses
          to directly connect with a robust network of micro-entrepreneurs
          across Africa. Starting with Nigeria - Africa's largest economy and
          most populous nation, with a focus on the software retail industry,
          Tradeflow will help established enterprise and consumer software
          companies connect and sell directly to the micro-entrepreneurs - local
          software vendors and MSMEs.
        </p>
        <p>
          It is the mission of every thriving business to continue to broaden
          their reach, grow their revenue and deepen their impact. Through the
          tools we provide, established businesses can explore the immense
          opportunities presented by other business expansion alternatives such
          as franchising, licensing, distributorship, strategic partnership, and
          agent network solutions - all of which fit perfectly into the African
          context.
        </p>
        <p>
          Leveraging technology and local market expertise, we set out to enable
          established businesses to enter into new markets quickly and firmly,
          with little to no regulatory/compliance hassle, and from a strong
          local market understanding.
        </p>
        <p>
          A trade-tech startup, Tradeflow’s Expansion Broker will prioritize
          conversion franchising, microfranchising, and agent network solutions.
        </p>

        <div>
          <p>
            Through the marketplace, establish software companies will be able
            to:
          </p>
          <ul className="list-disc pl-8">
            <li>Sell their software solutions;</li>
            <li>
              Acquire users for their products and services through our
              agent-referral offering;
            </li>
            <li>Create awareness for their new products and services;</li>
            <li>Track and manage conversion;</li>
            <li>
              Gather quality user feedback for their product improvement and
              real market insights; and
            </li>
            <li>
              Increase revenue significantly while reducing sales and marketing
              costs drastically
            </li>
          </ul>
        </div>
        <div>
          <p>The value of the platform to MSMEs include but not limited to:</p>
          <ul className="list-disc pl-8">
            <li>
              Access to a wide range of quality small-business friendly software
              solutions at highly competitive prices;
            </li>
            <li>Great opportunity to earn very high passive income;</li>
            <li>
              Unlimited access to performance-based, collateral-free,
              low-interest loans to expand their businesses; and
            </li>
            <li>
              Easy repayment - MSMEs working with Tradeflow will not have to
              worry about repaying their loans, as the marketplace is designed
              in such a seamless manner that part of the referral fees earned
              will cover loans to be repaid
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <p>
            Are you a software company looking to bring your innovative products
            to Africa and other emerging markets?
          </p>
          <p>
            Are you a software company looking to expand from one African
            country to another?
          </p>
          <p>
            Are you a microenterprise (MSME) seeking an opportunity to maximize
            your current resources in order to grow your business significantly?
          </p>
        </div>
        <p>
          Look no further, the Tradeflow Expansion Broker - marketplace solution
          is here to help you achieve your ambitious business goals.
        </p>
      </article>
      <div className="rounded-2xl w-11/12 lg:w-3/5 mx-auto py-10 sm:py-5 px-8 mb-10 flex flex-col sm:flex-row sm:justify-center items-center gap-5 bg-blue-300">
        <h2 className="text-grey-100 font-bold text-xl md:text-2xl xl:text-4xl">
          Business Expansion made easy
        </h2>
        <Link to="/form " className="w-full sm:w-auto">
          <Button
            paddingY="w-full py-5"
            width="w-full sm:w-28 lg:w-48"
            fontWeight="font-semibold"
          >
            Join the waitlist
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Blog;
