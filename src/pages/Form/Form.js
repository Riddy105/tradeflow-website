import React, { useState } from "react";
import logo from "../../assets/images/Tradeflow-logo-white.png";
import CompanyForm from "./CompanyForm";
import VendorForm from "./VendorForm";

const Form = () => {
  const [companyForm, setCompanyForm] = useState(true);

  const toggleFormHandler = () => {
    setCompanyForm((prev) => !prev);
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 md:h-screen bg-blue-100">
      <div className="flex justify-center items-center bg-pattern bg-no-repeat md:overflow-y-hidden py-12 md:py-0">
        <img
          src={logo}
          className="w-[168px] h-[35px] object-cover md:w-auto md:h-auto"
          alt="Tradaeflow logo"
        ></img>
      </div>
      <div className="md:bg-blue-300 md:pt-40 md:overflow-y-auto">
        <section className="w-full md:w-[85%] mx-auto rounded-xl shadow-custom3 bg-white-200 py-12 md:py-24  px-8 lg:px-14  ">
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
          {!companyForm && <VendorForm />}
          {companyForm && <CompanyForm />}
        </section>
      </div>
    </section>
  );
};

export default Form;
