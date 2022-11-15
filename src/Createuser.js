import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";

function Createuser() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      gender: "",
      phone: "",
      dob: "",
    },
    validate: (values) => {
      let error = {};

      if (!values.name) {
        error.name = "Please Enter Your Name";
      }

      if (values.name && (values.name.length <= 4 || values.name.length > 15)) {
        error.name = "Username Must be between 5 to 20 Characters";
      }

      if (!values.email) {
        error.email = "Please Enter Your Email";
      }

      if (
        values.email &&
        !/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        error.email = "Please Enter a Valid Email";
      }

      if (values.phone.toString().length !== 10) {
        error.phone = "Phone number is invalid";
      }

      let age = new Date().getFullYear() - parseInt(values.dob.split("-")[0]);
      console.log(age);

      if (age < 18) {
        error.dob = "You must be under 18";
      }
      return error;
    },

    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://636bc9417f47ef51e13a6884.mockapi.io/user",
          values
        );
        alert("Success");
      } catch (error) {
        alert("Error");
      }
    },
  });

  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>UserName*</label>
              <input
                name="name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                type={"text"}
                className={`form-control ${
                  formik.errors.name ? "error-box" : ""
                }${
                  formik.touched.name && !formik.errors.name
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.errors.name ? (
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="form-group">
              <label>Email*</label>
              <input
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type={"email"}
                className={`form-control ${
                  formik.touched.email && formik.errors.email ? "error-box" : ""
                }${
                  formik.touched.email && !formik.errors.email
                    ? "success-box"
                    : ""
                }`}
              ></input>

              {formik.touched.email && formik.errors.email ? (
                <span style={{ color: "red" }}>{formik.errors.email}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Country</label>
              <select
                name="country"
                onChange={formik.handleChange}
                value={formik.values.country}
                className={`form-control`}
              >
                <option>---</option>
                <option>China</option>
                <option>India</option>
                <option>America</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>State</label>
              <select
                name="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                className="form-control"
              >
                <option>---</option>
                <option>Kerala</option>
                <option>TamilNadu</option>
                <option>Andhra</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>City</label>
              <select
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className="form-control"
              >
                <option>---</option>
                <option>Kochin</option>
                <option>Chennai</option>
                <option>Hyderabad</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select
                name="gender"
                onChange={formik.handleChange}
                value={formik.values.gender}
                className="form-control"
              >
                <option>---</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Phone</label>
              <input
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                type={"number"}
                className={`form-control ${
                  formik.errors.phone ? "error-box" : ""
                }${
                  formik.touched.phone && !formik.errors.phone
                    ? "success-box"
                    : ""
                }`}
              ></input>
              {formik.touched.phone && formik.errors.phone ? (
                <span style={{ color: "red" }}>{formik.errors.phone}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                name="dob"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.dob}
                type={"date"}
                className={`form-control ${
                  formik.errors.dob ? "error-box" : ""
                }${
                  formik.touched.dob && !formik.errors.dob ? "success-box" : ""
                }`}
              ></input>
              {formik.touched.dob && formik.errors.dob ? (
                <span style={{ color: "red" }}>{formik.errors.dob}</span>
              ) : null}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Createuser;
