import { useMemo, useRef } from "react";
import { useFormik } from "formik";
import countryList from "react-select-country-list";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
const initialValues = {
  Title: "title",
  FirstName: "",
  LastName: "",
  BusinessName: "",
  Country: "country",
  BusinessType: "",
  State: "",
  Nin: "",
  Email: "",
  WhatsappNumber: "",
  PhoneNumber: "",
};
const validationSchema = Yup.object({
  Title: Yup.string(),
  Firstname: Yup.string().required("Name field cannot be empty"),
  LastName: Yup.string().required("Required"),
  BusinessName: Yup.string().required("Required"),
  Country: Yup.string().required("Required"),
  BusinessType: Yup.string().required("Required"),
  State: Yup.string().required("Required"),
  Nin: Yup.string().required("Required"),
  Email: Yup.string().email("Enter a valid Email address"),
  WhatsappNumber: Yup.string().required("Required"),
  PhoneNumber: Yup.string(),
});
const VendorForm = ({ popSuccessModalHandler }) => {
  const navigate = useNavigate();
  const formRef = useRef();
  const submissionhandler = () => {
    popSuccessModalHandler();
    setTimeout(() => navigate("/"), 10000);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    fetch(
      "https://script.google.com/macros/s/AKfycbxJ_j7qC-xaEh6nBJrFdV7ViXnNJlXiyKHK55pN4xuHvgU97xQhZJNgGwsKER3gftUSxg/exec",
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => {
      if (res.ok) {
        submissionhandler();
      }
    });
    // .then((data) => submissionhandler())
    // .catch((err) => console.log(err));
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const formData = new FormData(formRef.current);
      formData.append("FirstName", values.FirstName);
      formData.append("LastName", values.LastName);
      fetch(
        "https://script.google.com/macros/s/AKfycbxJ_j7qC-xaEh6nBJrFdV7ViXnNJlXiyKHK55pN4xuHvgU97xQhZJNgGwsKER3gftUSxg/exec",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    },
  });
  const options = useMemo(() => countryList().getData(), []);
  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <select
        className="input-fields mb-4"
        name="Title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.Title}
      >
        <option value="title" disabled>
          Title
        </option>
        <option>Mr</option>
        <option>Miss</option>
        <option>Mrs</option>
      </select>
      <div className="mb-4">
        <input
          type="text"
          placeholder="First Name"
          className="input-fields"
          name="FirstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.FirstName}
        />
        {formik.errors.FirstName && formik.touched.FirstName ? (
          <p className="error">{formik.errors.FirstName}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Last Name"
          className="input-fields"
          name="LastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.LastName}
        />
        {formik.errors.LastName && formik.touched.LastName ? (
          <p className="error">{formik.errors.LastName}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Business Name"
          className="input-fields"
          name="BusinessName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.BusinessName}
        />
        {formik.errors.BusinessName && formik.touched.BusinessName ? (
          <p className="error">{formik.errors.BusinessName}</p>
        ) : null}
      </div>

      <div className="flex gap-4 mb-4">
        <div className="mb-4 w-2/5">
          <select
            className="input-fields "
            name="Country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Country}
          >
            <option value="country" disabled>
              Country
            </option>
            {options.map((country, index) => (
              <option key={index} value={country.label}>
                {country.label}
              </option>
            ))}
          </select>
          {formik.errors.Country && formik.touched.Country ? (
            <p className="error">{formik.errors.Country}</p>
          ) : null}
        </div>
        <div className="w-[60%] mb-4">
          <input
            type="text"
            placeholder="Business Type"
            className="input-fields "
            name="BusinessType"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.BusinessType}
          />
          {formik.errors.BusinessType && formik.touched.BusinessType ? (
            <p className="error">{formik.errors.BusinessType}</p>
          ) : null}
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="State"
          className="input-fields"
          name="State"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.State}
        />
        {formik.errors.State && formik.touched.State ? (
          <p className="error">{formik.errors.State}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="National Identification Number (NIN)"
          className="input-fields"
          name="Nin"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Nin}
        />
        {formik.errors.Nin && formik.touched.Nin ? (
          <p className="error">{formik.errors.Nin}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email address (if any)"
          className="input-fields"
          name="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.Email}
        />
        {formik.errors.Email && formik.touched.Email ? (
          <p className="error">{formik.errors.Email}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Business WhatsApp Number"
          className="input-fields"
          name="WhatsappNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.WhatsappNumber}
        />
        {formik.errors.WhatsappNumber && formik.touched.WhatsappNumber ? (
          <p className="error">{formik.errors.WhatsappNumber}</p>
        ) : null}
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          className="input-fields"
          name="PhoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.PhoneNumber}
        />
        <p className="text-grey-700">
          (if different from Business WhatsApp number)
        </p>
      </div>
      <button
        type="submit"
        className="bg-blue-100 rounded-lg text-white-200 mt-10 md:mt-20 w-full md:w-1/4 h-12"
      >
        Join
      </button>
    </form>
  );
};

export default VendorForm;
