import { useMemo } from "react";
import { useFormik } from "formik";
import countryList from "react-select-country-list";
import React from "react";
const initialValues = {
  title: "title",
  firstname: "",
  lastname: "",
  businessname: "",
  country: "",
  businesstype: "",
  state: "",
  nin: "",
  email: "",
  whatsappnumber: "",
  phonenumber: "",
};
const VendorForm = () => {
  const formik = useFormik({
    initialValues,
    // validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const options = useMemo(() => countryList().getData(), []);
  return (
    <form onSubmit={formik.handleSubmit}>
      <select
        className="input-fields mb-4"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      >
        <option value="title">Title</option>
        <option>Mr</option>
        <option>Miss</option>
        <option>Mrs</option>
      </select>
      <div className="mb-4">
        <input
          type="text"
          placeholder="First Name"
          className="input-fields"
          name="firstname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstname}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Last Name"
          className="input-fields"
          name="lastname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastname}
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Business Name"
          className="input-fields"
          name="businessname"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.businessname}
        />
      </div>

      <div className="flex gap-4 mb-4">
        <select
          className="border border-blue-400 h-12 md:h-16 bg-white-300 w-2/5 px-2 rounded-lg text-grey-700 mb-4 "
          name="country"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.country}
        >
          {options.map((country, index) => (
            <option key={index}>{country.label}</option>
          ))}
        </select>
        <div className="w-[60%]">
          <input
            type="text"
            placeholder="Business Type"
            className="border border-blue-400 h-12 md:h-16 bg-white-300 w-full px-2 rounded-lg text-grey-700 mb-4 "
            name="businesstype"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.businesstype}
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="State"
          className="input-fields"
          name="state"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="National Identification Number (NIN)"
          className="input-fields"
          name="nin"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nin}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email address (if any)"
          className="input-fields"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Business WhatsApp Number"
          className="input-fields"
          name="whatsappnumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.whatsappnumber}
        />
      </div>
      <div className="mb-4">
        <input
          type="number"
          placeholder="Phone Number"
          className="input-fields"
          name="phonenumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phonenumber}
        />
        <p className="text-grey-700">
          (if different from Business WhatsApp number)
        </p>
      </div>
      <button className="bg-blue-100 rounded-lg text-white-200 mt-10 md:mt-20 w-full md:w-1/4 h-12">
        Join
      </button>
    </form>
  );
};

export default VendorForm;
