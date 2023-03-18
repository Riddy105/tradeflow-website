import React, { useMemo } from "react";
import { useFormik } from "formik";
import countryList from "react-select-country-list";
import * as Yup from "yup";
const initialValues = {
  companyName: "",
  companyWebsite: "",
  companyEmail: "",
  companyAddress: "",
  industry: "",
  country: "",
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
  country: Yup.string().required("Select an industry"),
  establishmentDate: Yup.number().required("Required"),
  companyProblem: Yup.string().required("Required"),
  companySolution: Yup.string().required("Required"),
  companyGoal: Yup.string().required("Required"),
});
const CompanyForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => console.log(values),
  });
  const options = useMemo(() => countryList().getData(), []);
  return (
    <form onSubmit={formik.handleSubmit}>
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
        <select
          className="input-fields"
          name="industry"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.industry}
        >
          <option selected disabled>
            Industry
          </option>
          {options.map((country, index) => (
            <option key={index}>{country.label}</option>
          ))}
        </select>
        <select
          className="input-fields "
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
          defaultValue="Country of incorporation"
        >
          <option selected disabled>
            Country of incorporation
          </option>
          {options.map((country, index) => (
            <option key={index}>{country.label}</option>
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
      <button className="bg-blue-100 rounded-lg text-white-200 mt-10 md:mt-20 w-full md:w-1/4 h-12">
        Join
      </button>
    </form>
  );
};

export default CompanyForm;
