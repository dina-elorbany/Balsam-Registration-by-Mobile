import React, { useState, useEffect } from "react";
import "./Form.css";
import logo from "../../assets/logo.png";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";

const CustomCheckbox = withStyles({
  root: {
    color: "#f1f6fd",
    backgroundColor: "#f1f6fd",
    border: "1px solid #E3F0FB",
    borderRadius: "18px",
    "&$checked": {
      backgroundColor: "#2581C5",
      color: "#f1f6fd",
    },
  },

  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Form(props) {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/countries")
      .then((res) => {
        setCountry(res.data);
        console.log(res);
      })
      .catch((e) => {});
  }, []);

  return (
    <BrowserRouter>
      <div className="form-wrapper col-md pe-0">
        <div className="container ms-lg-3 form-overlay">
          <img src={logo} alt="group" className="my-5" />
          <h1 className="reg-header">Register now</h1>
          <p>Lorem ipsum dolor sit amet, consecteture adipiscing.</p>

          <form className="d-flex flex-column" id="main-form" validation="true">
            {/* COUNTRY */}
            <div className="form-group">
              <select id="inputState" className=" input-box">
                {country.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
            </div>

            {/* FULL NAME */}
            <div className="form-group">
              <input
                type="text"
                className=" input-box"
                placeholder="Full Name"
              />
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <input
                type="email"
                className=" input-box"
                id="exampleInputEmail1"
                placeholder="Enter email"
              />
            </div>

            {/* NUMBER */}
            <div className="form-group">
              <input
                type="tel"
                className="input-box"
                placeholder="Mobile number"
              />
            </div>

            {/* PASSWORD */}
            <div className="form-group mb-4">
              <input
                type="password"
                className=" input-box"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>

            <p className="p-verify">Verify your account with</p>

            {/* PHONE NUMBER CHECK */}
            <div className="checkbox-wrapper ms-2">
              <div className="d-flex justify-content-between">
                <FormControlLabel
                  control={
                    <CustomCheckbox name="mobile-checkbox" className="me-3" />
                  }
                  className="checkbox"
                  label="Phone number"
                />

                {/* EMAIL CHECK */}
                <FormControlLabel
                  control={
                    <CustomCheckbox name="email-checkbox" className="me-3" />
                  }
                  className="checkbox"
                  label="Email"
                />
              </div>
            </div>

            <hr className="my-4" />

            {/* TERMS AND CONDITIONS */}
            <div className="ms-2">
              <FormControlLabel
                control={
                  <CustomCheckbox name="terms-checkbox" className="me-3" />
                }
                className="checkbox pb-4"
                label=" I accept the terms and conditions, consecteture adipiscing
                  elit. Integer eu velit est. Meacenas nulla justo, feugiat eget
                  congue in, auctor tellus."
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button type="submit" className="btn-continue py-3 my-4">
              Continue
            </button>
            <div className="text-center mt-3 mb-5">
              <Link to="" className="link">
                Already registered? login here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Form;
