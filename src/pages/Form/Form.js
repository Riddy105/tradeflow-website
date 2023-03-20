import React, { useState } from "react";
import logo from "../../assets/images/Tradeflow-logo-white.png";
import pattern from "../../assets/images/form-pattern.png";
import CompanyForm from "./CompanyForm";
import VendorForm from "./VendorForm";
import SuccessModal from "../../components/SuccessModal/SuccessModal";
import { Link } from "react-router-dom";

const Form = () => {
  const [companyForm, setCompanyForm] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const toggleFormHandler = () => {
    setCompanyForm((prev) => !prev);
  };
  const popSuccessModal = () => {
    setSubmitted(true);
  };
  const closeSuccessModal = () => {
    setSubmitted(false);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-custom1 md:h-screen ">
      {/* <div className="flex justify-center items-center bg-pattern bg-no-repeat md:overflow-y-hidden py-12 md:py-0"> */}
      <div className="bg-blue-100 relative md:overflow-y-hidden">
        <img
          src={pattern}
          className="mix-blend-multiply h-[120px] md:h-full w-full"
          alt="pattern illustration"
        ></img>
        <Link to="/">
          <img
            src={logo}
            className="w-[168px] h-[35px] object-cover lg:w-auto lg:h-auto absolute top-[50%] left-[50%] translate-x-[-50%]"
            alt="Tradaeflow logo"
          ></img>
        </Link>
      </div>
      {/* </div> */}
      <div className="md:bg-blue-300 md:pt-40 md:overflow-y-auto ">
        <section className="md:w-[85%] mx-auto rounded-xl shadow-custom3 bg-white-200 py-12 md:py-24  px-8 lg:px-14 ">
          <h2 className="text-blue-100 text-2xl md:text-4xl mb-7 font-bold">
            Sign Up
          </h2>
          <div className="flex gap-2 md:gap-4">
            <button
              className={`bg-blue-300 rounded-lg text-black-100 h-14 md:h-[70px] w-1/2 font-medium text-sm md:text-base ${
                companyForm ? "border border-blue-100" : " "
              }`}
              onClick={toggleFormHandler}
            >
              Software companies
            </button>
            <button
              className={`bg-blue-300 rounded-lg text-black-100 h-14 md:h-[70px] w-1/2 font-medium  ${
                companyForm ? "" : "border border-blue-100"
              }`}
              onClick={toggleFormHandler}
            >
              <h2 className="text-sm md:text-base">Micro entrepreneurs</h2>
              <p className="font-normal text-xs">
                Software vendors, stores, restaurants
              </p>
            </button>
          </div>
          <p className="text-grey-700 font-medium text-sm my-3 md:my-5">
            {companyForm ? "Company Information" : "User Information"}
          </p>
          {!companyForm && (
            <VendorForm popSuccessModalHandler={popSuccessModal} />
          )}
          {companyForm && (
            <CompanyForm popSuccessModalHandler={popSuccessModal} />
          )}
        </section>
      </div>
      {submitted && <SuccessModal closeSuccessModal={closeSuccessModal} />}
    </section>
  );
};

export default Form;
