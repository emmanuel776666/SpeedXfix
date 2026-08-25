import { Link } from "react-router-dom";
import { useState } from "react";

import TrustFeaturesComponent from "../components/TrustFeaturesComponent";
import LogoComponent from "../components/LogoComponent";

import serviceCategories from "../data/services";

import "./Signup.css";


function Signup() {

  // Which signup page are we currently on?
  const [currentStep, setCurrentStep] = useState(1);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // User information
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",

    category: "",
    occupation: "",

    nationality: "Nigeria",
    state: "",
    localGovernment: "",

    experienceLevel: ""
  });


  // Handle input changes
  function handleChange(event) {

    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));

    // If category changes, remove the old occupation
    if (name === "category") {
      setFormData((previousData) => ({
        ...previousData,
        category: value,
        occupation: ""
      }));
    }
  }


  // Move from personal details to work details
  function handleContinue() {

    if (currentStep === 1) {
      setCurrentStep(2);
    }
  }


  // Go back to personal details
  function handleBack() {

    if (currentStep === 2) {
      setCurrentStep(1);
    }
  }


  // Submit the complete signup form
  function handleSubmit(event) {

    event.preventDefault();

    console.log("SpeedXFix signup data:", formData);

  }


  return (
    <div className="containerSignup">

      <div className="signupdivall">

        {/* =========================
            TOP NAVIGATION
        ========================= */}

        <div className="signupdiv1">

          <LogoComponent />

          <div className="sign-in-text-option">
            Already have an account? <Link to="/login">
             Sign in
            </Link>
          </div>

        </div>


        {/* =========================
            SIGNUP FORM
        ========================= */}

        <div className="signupdiv2">

          <div className="signup-form">

            {/* TITLE */}

            <div className="signup-heading">

              <h1>
                Create <span>your</span> account
              </h1>

              <p>
                Join SpeedXFix and get any job done, fast.
              </p>

            </div>


            {/* =========================
                STEP INDICATOR
            ========================= */}

            <div className="signup-steps">

              {/* STEP 1 */}

              <div
                className={`signup-step ${
                  currentStep === 1
                    ? "active"
                    : "completed"
                }`}
              >

                <div className="step-circle">

                  {currentStep === 1 ? "1" : "✓"}

                </div>

                <span>
                  Personal Details
                </span>

              </div>


              {/* LINE */}

              <div
                className={`step-line ${
                  currentStep === 2
                    ? "step-line-active"
                    : ""
                }`}
              ></div>


              {/* STEP 2 */}

              <div
                className={`signup-step ${
                  currentStep === 2
                    ? "active"
                    : ""
                }`}
              >

                <div className="step-circle">

                  2

                </div>

                <span>
                  Work Details
                </span>

              </div>

            </div>


            {/* =========================
                FORM
            ========================= */}

            <form onSubmit={handleSubmit}>


              {/* ==================================
                  STEP 1 — PERSONAL DETAILS
              ================================== */}

              {currentStep === 1 && (

                <div className="signup-step-content">

                  <div className="signup-section-heading">

                    <h2>
                      Personal Details
                    </h2>

                    <p>
                      Please provide your personal information to get started.
                    </p>

                  </div>


                  {/* FIRST + LAST NAME */}

                  <div className="signup-name-row">

                    <div className="signup-input-group">

                      <label>
                        First Name
                      </label>

                      <div className="signup-input-with-icon">

                        <span className="material-symbols-outlined">
                          person
                        </span>

                        <input
                          type="text"
                          name="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                        />

                      </div>

                    </div>


                    <div className="signup-input-group">

                      <label>
                        Last Name
                      </label>

                      <div className="signup-input-with-icon">

                        <span className="material-symbols-outlined">
                          person
                        </span>

                        <input
                          type="text"
                          name="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                        />

                      </div>

                    </div>

                  </div>


                  {/* SURNAME */}

                  <div className="signup-input-group">

                    <label>
                      Surname
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        person
                      </span>

                      <input
                        type="text"
                        name="surname"
                        placeholder="Enter your surname"
                        value={formData.surname}
                        onChange={handleChange}
                      />

                    </div>

                  </div>


                  {/* PHONE NUMBER */}

                  <div className="signup-input-group">

                    <label>
                      Phone Number
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        phone
                      </span>

                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                      />

                    </div>

                  </div>


                  {/* EMAIL */}

                  <div className="signup-input-group">

                    <label>
                      Email Address
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        mail
                      </span>

                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />

                    </div>

                  </div>


                  {/* PASSWORD */}

                  <div className="signup-input-group">

                    <label>
                      Password
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        lock
                      </span>

                      <input
                        type={
                          showPassword
                            ? "text"
                            : "password"
                        }
                        name="password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="signup-password-toggle"
                        onClick={() =>
                          setShowPassword(!showPassword)
                        }
                      >

                        <span className="material-symbols-outlined">

                          {
                            showPassword
                              ? "visibility_off"
                              : "visibility"
                          }

                        </span>

                      </button>

                    </div>

                  </div>


                  {/* CONFIRM PASSWORD */}

                  <div className="signup-input-group">

                    <label>
                      Re-enter Password
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        lock
                      </span>

                      <input
                        type={
                          showConfirmPassword
                            ? "text"
                            : "password"
                        }
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />

                      <button
                        type="button"
                        className="signup-password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(
                            !showConfirmPassword
                          )
                        }
                      >

                        <span className="material-symbols-outlined">

                          {
                            showConfirmPassword
                              ? "visibility_off"
                              : "visibility"
                          }

                        </span>

                      </button>

                    </div>

                  </div>


                  {/* CONTINUE */}

                  <button
                    type="button"
                    className="signup-continue-btn"
                    onClick={handleContinue}
                  >

                    <span>
                      Continue
                    </span>

                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>

                  </button>

                </div>

              )}


              {/* ==================================
                  STEP 2 — WORK DETAILS
              ================================== */}

              {currentStep === 2 && (

                <div className="signup-step-content">

                  <div className="signup-section-heading">

                    <h2>
                      Work Details
                    </h2>

                    <p>
                      Tell us about your work and location.
                    </p>

                  </div>


                  {/* CATEGORY */}

                  <div className="signup-input-group">

                    <label>
                      Service Category
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        work
                      </span>

                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select your service category
                        </option>

                        {
                          Object.keys(serviceCategories).map(
                            (category) => (

                              <option
                                key={category}
                                value={category}
                              >
                                {category}
                              </option>

                            )
                          )
                        }

                      </select>

                    </div>

                  </div>


                  {/* OCCUPATION */}

                  <div className="signup-input-group">

                    <label>
                      Occupation
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        engineering
                      </span>

                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        disabled={!formData.category}
                      >

                        <option value="">
                          {
                            formData.category
                              ? "Select your occupation"
                              : "Select a category first"
                          }
                        </option>

                        {
                          formData.category &&
                          serviceCategories[
                            formData.category
                          ].map((occupation) => (

                            <option
                              key={occupation}
                              value={occupation}
                            >
                              {occupation}
                            </option>

                          ))
                        }

                      </select>

                    </div>

                  </div>


                  {/* NATIONALITY */}

                  <div className="signup-input-group">

                    <label>
                      Nationality
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        public
                      </span>

                      <select
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                      >

                        <option value="Nigeria">
                          Nigeria
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* STATE */}

                  <div className="signup-input-group">

                    <label>
                      State
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        location_on
                      </span>

                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select your state
                        </option>

                        {/* Nigeria states will go here */}

                      </select>

                    </div>

                  </div>


                  {/* LOCAL GOVERNMENT */}

                  <div className="signup-input-group">

                    <label>
                      Local Government
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        location_city
                      </span>

                      <select
                        name="localGovernment"
                        value={formData.localGovernment}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select your local government
                        </option>

                        {/* LGAs will be dynamically loaded here */}

                      </select>

                    </div>

                  </div>


                  {/* EXPERIENCE */}

                  <div className="signup-input-group">

                    <label>
                      Experience Level
                    </label>

                    <div className="signup-input-with-icon">

                      <span className="material-symbols-outlined">
                        signal_cellular_alt
                      </span>

                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleChange}
                      >

                        <option value="">
                          Select experience level
                        </option>

                        <option value="Low Level">
                          Low Level
                        </option>

                        <option value="Intermediate">
                          Intermediate
                        </option>

                        <option value="High Level">
                          High Level
                        </option>

                      </select>

                    </div>

                  </div>


                  {/* BACK + CONTINUE */}

                  <div className="signup-buttons-row">

                    <button
                      type="button"
                      className="signup-back-btn"
                      onClick={handleBack}
                    >

                      <span className="material-symbols-outlined">
                        arrow_back
                      </span>

                    </button>


                    <button
                      type="submit"
                      className="signup-continue-btn"
                    >

                      <span>
                        Continue
                      </span>

                      <span className="material-symbols-outlined">
                        arrow_forward
                      </span>

                    </button>

                  </div>

                </div>

              )}

            </form>


            {/* SECURITY MESSAGE */}

            <div className="signup-security">

              <span className="material-symbols-outlined">
                lock
              </span>

              <span>
                Your information is secure with SpeedXFix
              </span>

            </div>

          </div>

        </div>


        {/* =========================
            TRUST FEATURES
        ========================= */}

        <div className="signupdiv3">

        <TrustFeaturesComponent />

        </div>

      </div>

    </div>
  );
}

export default Signup;