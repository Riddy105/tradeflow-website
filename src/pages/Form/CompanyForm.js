import React, { useMemo, useRef, useState } from "react";
import { useFormik } from "formik";
import countryList from "react-select-country-list";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
const initialValues = {
  companyName: "",
  companyWebsite: "",
  companyEmail: "",
  companyAddress: "",
  industry: "",
  country: "Country of incorporation",
  establishmentDate: "",
  registrationId: "",
  companyProblem: "",
  companySolution: "",
  companyGoal: "",
};
const validationSchema = Yup.object({
  companyName: Yup.string().required("Required"),
  companyWebsite: Yup.string().required("Required"),
  companyEmail: Yup.string().required("Required").email("Enter a valid email"),
  companyAddress: Yup.string()
    .required("Required")
    .email("Enter a valid email"),
  industry: Yup.string().required("Select an industry"),
  country: Yup.string().required("Select a country"),
  establishmentDate: Yup.string().required("Required"),
  companyProblem: Yup.string().required("Required"),
  companySolution: Yup.string().required("Required"),
  companyGoal: Yup.string().required("Required"),
});
const CompanyForm = ({ popSuccessModalHandler }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const options = useMemo(() => countryList().getData(), []);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values),
  });
  const submissionhandler = () => {
    setIsSubmitting(false);
    popSuccessModalHandler(); // Function to change the submitted state to true and this triggers a modal popup.
    setTimeout(() => navigate("/"), 10000); // After 10 seconds, we want to navigate back to home.
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(formRef.current);
    fetch(
      "https://script.google.com/macros/s/AKfycbwIYT1UzTFolc2490xf0Ro4LTpbXlUpdHTokH6nAI-GjzCEs-PRWWFkWT4HCcClPbrDAg/exec ",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => {
        if (res.ok) {
          submissionhandler();
        }
        console.log(res);
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Company Name"
          className="input-fields"
          name="companyName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyName}
        />
        {formik.errors.companyName && formik.touched.companyName ? (
          <p className="error">{formik.errors.companyName}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Company Website"
          className="input-fields"
          name="companyWebsite"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyWebsite}
        />
        {formik.errors.companyWebsite && formik.touched.companyWebsite ? (
          <p className="error">{formik.errors.companyWebsite}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Company Email"
          className="input-fields"
          name="companyEmail"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyEmail}
        />
        {formik.errors.companyEmail && formik.touched.companyEmail ? (
          <p className="error">{formik.errors.companyEmail}</p>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <input
            type="text"
            placeholder="Company Address"
            className="input-fields"
            name="companyAddress"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.companyAddress}
          />
          {formik.errors.companyAddress && formik.touched.companyAddress ? (
            <p className="error">{formik.errors.companyAddress}</p>
          ) : null}
        </div>
        <div className="">
          <input
            type="text"
            placeholder="Industry"
            className="input-fields"
            name="industry"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.industry}
          />
          {formik.errors.industry && formik.touched.industry ? (
            <p className="error">{formik.errors.industry}</p>
          ) : null}
        </div>
        <select
          className={` border h-12 md:h-16 bg-white-300 w-full px-2 rounded-lg text-grey-700 focus:outline-none ${
            formik.errors.industry && formik.touched.industry
              ? "border-red-500 "
              : "border-blue-400 "
          } `}
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        >
          <option value="Country of incorporation" disabled>
            Country of incorporation
          </option>
          {options.map((country, index) => (
            <option key={index} value={country.label}>
              {country.label}
            </option>
          ))}
        </select>
        <div>
          <input
            type="date"
            placeholder="Date of Establishment"
            className="input-fields"
            name="establishmentDate"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.establishmentDate}
          />
          {formik.errors.establishmentDate &&
          formik.touched.establishmentDate ? (
            <p className="error">{formik.errors.establishmentDate}</p>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Corporate Registration ID"
          className="input-fields"
          name="registrationId"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.registrationId}
        />
      </div>
      <p className="text-grey-700 my-4">Brief description of the company</p>
      <div className="mb-4">
        <input
          type="text"
          placeholder="The problem our company is solving is "
          className="input-textarea"
          name="companyProblem"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyProblem}
        />
        {formik.errors.companyProblem && formik.touched.companyProblem ? (
          <p className="error">{formik.errors.companyProblem}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="The solution our company is offering is"
          className="input-textarea"
          name="companySolution"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companySolution}
        />
        {formik.errors.companySolution && formik.touched.companySolution ? (
          <p className="error">{formik.errors.companySolution}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Our expansion goal is to "
          className="input-textarea"
          name="companyGoal"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.companyGoal}
        />
        {formik.errors.companyGoal && formik.touched.companyGoal ? (
          <p className="error">{formik.errors.companyGoal}</p>
        ) : null}
      </div>
      <button
        className={`${
          isSubmitting ? "bg-blue-100/20" : "bg-blue-100"
        } rounded-lg text-white-200 mt-10 md:mt-20 w-full md:w-1/4 h-12`}
      >
        Join
      </button>
    </form>
  );
};

export default CompanyForm;
