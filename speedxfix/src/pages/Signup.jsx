import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import serviceCategories from "../data/services";
import nigeriaLocations from "../data/nigeriaLocations";

import "./Signup.css";

import {
  UserRound,
  Phone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  BriefcaseBusiness,
  HardHat,
  Globe,
  MapPin,
  Building2,
  ChartNoAxesColumnIncreasing,
  Camera,
  FileText,
  Check,
  ShieldCheck,
  CheckCircle2,
  Clock3,
} from "lucide-react";

import logo from "../assets/logo.webp";


// ============================================================
// SIGNUP PAGE
// ============================================================

function Signup() {
  const navigate = useNavigate();

  // ----------------------------------------------------------
  // Current signup step
  // ----------------------------------------------------------

  const [currentStep, setCurrentStep] = useState(1);


  // ----------------------------------------------------------
  // Password visibility
  // ----------------------------------------------------------

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);


  // ----------------------------------------------------------
  // Profile image preview
  // ----------------------------------------------------------

  const [profilePreview, setProfilePreview] = useState(null);


  // ----------------------------------------------------------
  // Form state
  // ----------------------------------------------------------

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",

    work: {
      category: "",
      occupation: "",
      experienceLevel: "",
    },

    location: {
      country: "Nigeria",
      state: "",
      localGovernment: "",
    },

    profile: {
      image: null,
      description: "",
    },
  });


  // ----------------------------------------------------------
  // Create and clean up image preview URL
  // ----------------------------------------------------------

  useEffect(() => {
    if (!formData.profile.image) {
      setProfilePreview(null);
      return;
    }

    const imageUrl = URL.createObjectURL(
      formData.profile.image
    );

    setProfilePreview(imageUrl);

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [formData.profile.image]);


  // ----------------------------------------------------------
  // Handle normal inputs
  // ----------------------------------------------------------

  function handleChange(event) {
    const { name, value } = event.target;


    // Personal information
    if (
      [
        "firstName",
        "lastName",
        "surname",
        "phone",
        "email",
        "password",
        "confirmPassword",
      ].includes(name)
    ) {
      setFormData((previousData) => ({
        ...previousData,
        [name]: value,
      }));

      return;
    }


    // Work information
    if (
      [
        "category",
        "occupation",
        "experienceLevel",
      ].includes(name)
    ) {
      setFormData((previousData) => ({
        ...previousData,

        work: {
          ...previousData.work,

          [name]: value,

          // Reset occupation whenever category changes
          ...(name === "category" && {
            occupation: "",
          }),
        },
      }));

      return;
    }


    // Profile information
    if (name === "description") {
      setFormData((previousData) => ({
        ...previousData,

        profile: {
          ...previousData.profile,
          description: value,
        },
      }));

      return;
    }


    // Location information
    if (
      [
        "country",
        "state",
        "localGovernment",
      ].includes(name)
    ) {
      setFormData((previousData) => ({
        ...previousData,

        location: {
          ...previousData.location,

          [name]: value,

          // Reset LGA whenever state changes
          ...(name === "state" && {
            localGovernment: "",
          }),
        },
      }));
    }
  }


  // ----------------------------------------------------------
  // Handle profile image
  // ----------------------------------------------------------

  function handleProfileImage(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    setFormData((previousData) => ({
      ...previousData,

      profile: {
        ...previousData.profile,
        image: file,
      },
    }));
  }


  // ----------------------------------------------------------
  // Navigation
  // ----------------------------------------------------------

  function handleContinue() {
    if (currentStep < 3) {
      setCurrentStep((previousStep) => previousStep + 1);
    }
  }


  function handleBack() {
    if (currentStep > 1) {
      setCurrentStep((previousStep) => previousStep - 1);
    }
  }


  // ----------------------------------------------------------
  // Submit
  // ----------------------------------------------------------

  function handleSubmit(event) {
    event.preventDefault();

    console.log(
      "SpeedXFix signup data:",
      formData
    );

    // Backend signup request will eventually happen here.
    navigate("/homepage");
  }


  // ----------------------------------------------------------
  // Step information
  // ----------------------------------------------------------

  const steps = [
    {
      number: 1,
      label: "Personal details",
    },
    {
      number: 2,
      label: "Work details",
    },
    {
      number: 3,
      label: "Your profile",
    },
  ];


  // ----------------------------------------------------------
  // Trust features
  // ----------------------------------------------------------

  const trustFeatures = [
    {
      icon: CheckCircle2,
      title: "Verified professionals",
    },
    {
      icon: Clock3,
      title: "Fast & reliable",
    },
    {
      icon: ShieldCheck,
      title: "Secure platform",
    },
  ];


  return (
    <main className="signup-page">

      {/* ======================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="signup-background-glow signup-glow-one" />
      <div className="signup-background-glow signup-glow-two" />


      {/* ======================================================
          TOP BAR
      ====================================================== */}

      <header className="signup-header">

        <Link
          to="/"
          className="signup-logo"
        >
          <img
            src={logo}
            alt="SpeedXFix"
          />
        </Link>


        <p className="signin-prompt">
          Already have an account?
          <Link to="/login">
            Sign in
          </Link>
        </p>

      </header>


      {/* ======================================================
          MAIN CONTENT
      ====================================================== */}

      <section className="signup-main">

        {/* ====================================================
            LEFT INFORMATION PANEL
        ==================================================== */}

        <aside className="signup-intro">

          <span className="signup-intro-badge">
            Join SpeedXFix
          </span>


          <h1>
            Turn your skills
            <br />
            into <span>opportunity.</span>
          </h1>


          <p className="signup-intro-description">
            Create your professional profile and connect
            with people who need the work you do.
          </p>


          {/* Benefits */}

          <div className="signup-benefits">

            {trustFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className="signup-benefit"
                  key={feature.title}
                >

                  <div className="signup-benefit-icon">
                    <Icon size={17} />
                  </div>

                  <span>
                    {feature.title}
                  </span>

                </div>
              );
            })}

          </div>


          <div className="signup-intro-note">
            <span></span>
            Your information is protected and handled securely.
          </div>

        </aside>


        {/* ====================================================
            SIGNUP CARD
        ==================================================== */}

        <div className="signup-card">

          {/* --------------------------------------------------
              CARD HEADER
          -------------------------------------------------- */}

          <div className="signup-card-header">

            <div>

              <span className="signup-card-eyebrow">
                CREATE ACCOUNT
              </span>

              <h2>
                Create your account
              </h2>

              <p>
                Join SpeedXFix and get any job done, fast.
              </p>

            </div>

          </div>


          {/* ==================================================
              STEP INDICATOR
          ================================================== */}

          <div className="signup-stepper">

            {steps.map((step, index) => {

              const isActive =
                currentStep === step.number;

              const isCompleted =
                currentStep > step.number;

              return (
                <div
                  className="stepper-item-wrapper"
                  key={step.number}
                >

                  <div
                    className={`stepper-item ${
                      isActive
                        ? "active"
                        : isCompleted
                        ? "completed"
                        : ""
                    }`}
                  >

                    <div className="stepper-circle">

                      {isCompleted ? (
                        <Check size={14} />
                      ) : (
                        step.number
                      )}

                    </div>

                    <span>
                      {step.label}
                    </span>

                  </div>


                  {index < steps.length - 1 && (
                    <div
                      className={`stepper-line ${
                        currentStep >
                        step.number
                          ? "completed"
                          : ""
                      }`}
                    />
                  )}

                </div>
              );
            })}

          </div>


          {/* ==================================================
              FORM
          ================================================== */}

          <form
            onSubmit={handleSubmit}
            className="signup-form"
          >

            {/* =================================================
                STEP 1 — PERSONAL DETAILS
            ================================================= */}

            {currentStep === 1 && (

              <div className="signup-step-content">

                <div className="form-section-heading">

                  <h3>
                    Personal details
                  </h3>

                  <p>
                    Tell us a little about yourself.
                  </p>

                </div>


                {/* Name row */}

                <div className="form-row">

                  <div className="form-field">

                    <label htmlFor="firstName">
                      First name
                    </label>

                    <div className="form-input">

                      <UserRound size={17} />

                      <input
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />

                    </div>

                  </div>


                  <div className="form-field">

                    <label htmlFor="lastName">
                      Last name
                    </label>

                    <div className="form-input">

                      <UserRound size={17} />

                      <input
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />

                    </div>

                  </div>

                </div>


                {/* Surname */}

                <div className="form-field">

                  <label htmlFor="surname">
                    Surname
                  </label>

                  <div className="form-input">

                    <UserRound size={17} />

                    <input
                      id="surname"
                      type="text"
                      name="surname"
                      placeholder="Enter your surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />

                  </div>

                </div>


                {/* Phone */}

                <div className="form-field">

                  <label htmlFor="phone">
                    Phone number
                  </label>

                  <div className="form-input">

                    <Phone size={17} />

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />

                  </div>

                </div>


                {/* Email */}

                <div className="form-field">

                  <label htmlFor="email">
                    Email address
                  </label>

                  <div className="form-input">

                    <Mail size={17} />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                    />

                  </div>

                </div>


                {/* Password */}

                <div className="form-field">

                  <label htmlFor="password">
                    Password
                  </label>

                  <div className="form-input">

                    <Lock size={17} />

                    <input
                      id="password"
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
                      className="password-toggle"
                      onClick={() =>
                        setShowPassword(
                          (previous) => !previous
                        )
                      }
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>

                  </div>

                </div>


                {/* Confirm password */}

                <div className="form-field">

                  <label htmlFor="confirmPassword">
                    Re-enter password
                  </label>

                  <div className="form-input">

                    <Lock size={17} />

                    <input
                      id="confirmPassword"
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      value={
                        formData.confirmPassword
                      }
                      onChange={handleChange}
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(
                          (previous) => !previous
                        )
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>

                  </div>

                </div>


                <button
                  type="button"
                  className="signup-primary-button"
                  onClick={handleContinue}
                >
                  <span>
                    Continue
                  </span>

                  <ArrowRight size={18} />
                </button>

              </div>
            )}


            {/* =================================================
                STEP 2 — WORK DETAILS
            ================================================= */}

            {currentStep === 2 && (

              <div className="signup-step-content">

                <div className="form-section-heading">

                  <h3>
                    Work details
                  </h3>

                  <p>
                    Tell us about the services you provide.
                  </p>

                </div>


                {/* Category */}

                <div className="form-field">

                  <label htmlFor="category">
                    Service category
                  </label>

                  <div className="form-input">

                    <BriefcaseBusiness size={17} />

                    <select
                      id="category"
                      name="category"
                      value={
                        formData.work.category
                      }
                      onChange={handleChange}
                    >

                      <option value="">
                        Select your service category
                      </option>

                      {Object.keys(
                        serviceCategories
                      ).map((category) => (

                        <option
                          key={category}
                          value={category}
                        >
                          {category}
                        </option>

                      ))}

                    </select>

                  </div>

                </div>


                {/* Occupation */}

                <div className="form-field">

                  <label htmlFor="occupation">
                    Occupation
                  </label>

                  <div className="form-input">

                    <HardHat size={17} />

                    <select
                      id="occupation"
                      name="occupation"
                      value={
                        formData.work.occupation
                      }
                      onChange={handleChange}
                      disabled={
                        !formData.work.category
                      }
                    >

                      <option value="">
                        {formData.work.category
                          ? "Select your occupation"
                          : "Select a category first"}
                      </option>

                      {formData.work.category &&
                        serviceCategories[
                          formData.work.category
                        ].map((occupation) => (

                          <option
                            key={occupation}
                            value={occupation}
                          >
                            {occupation}
                          </option>

                        ))}

                    </select>

                  </div>

                </div>


                {/* Country */}

                <div className="form-field">

                  <label htmlFor="country">
                    Nationality
                  </label>

                  <div className="form-input">

                    <Globe size={17} />

                    <select
                      id="country"
                      name="country"
                      value={
                        formData.location.country
                      }
                      onChange={handleChange}
                    >
                      <option value="Nigeria">
                        Nigeria
                      </option>
                    </select>

                  </div>

                </div>


                {/* State */}

                <div className="form-field">

                  <label htmlFor="state">
                    State
                  </label>

                  <div className="form-input">

                    <MapPin size={17} />

                    <select
                      id="state"
                      name="state"
                      value={
                        formData.location.state
                      }
                      onChange={handleChange}
                    >

                      <option value="">
                        Select your state
                      </option>

                      {Object.keys(
                        nigeriaLocations
                      ).map((state) => (

                        <option
                          key={state}
                          value={state}
                        >
                          {state}
                        </option>

                      ))}

                    </select>

                  </div>

                </div>


                {/* LGA */}

                <div className="form-field">

                  <label htmlFor="localGovernment">
                    Local government
                  </label>

                  <div className="form-input">

                    <Building2 size={17} />

                    <select
                      id="localGovernment"
                      name="localGovernment"
                      value={
                        formData.location
                          .localGovernment
                      }
                      onChange={handleChange}
                      disabled={
                        !formData.location.state
                      }
                    >

                      <option value="">
                        {formData.location.state
                          ? "Select your local government"
                          : "Select a state first"}
                      </option>

                      {formData.location.state &&
                        nigeriaLocations[
                          formData.location.state
                        ].map(
                          (localGovernment) => (

                            <option
                              key={localGovernment}
                              value={
                                localGovernment
                              }
                            >
                              {localGovernment}
                            </option>

                          )
                        )}

                    </select>

                  </div>

                </div>


                {/* Experience */}

                <div className="form-field">

                  <label htmlFor="experienceLevel">
                    Experience level
                  </label>

                  <div className="form-input">

                    <ChartNoAxesColumnIncreasing
                      size={17}
                    />

                    <select
                      id="experienceLevel"
                      name="experienceLevel"
                      value={
                        formData.work
                          .experienceLevel
                      }
                      onChange={handleChange}
                    >

                      <option value="">
                        Select experience level
                      </option>

                      <option value="Low Level">
                        Beginner
                      </option>

                      <option value="Intermediate">
                        Intermediate
                      </option>

                      <option value="High Level">
                        Experienced
                      </option>

                    </select>

                  </div>

                </div>


                {/* Navigation */}

                <div className="signup-navigation">

                  <button
                    type="button"
                    className="signup-back-button"
                    onClick={handleBack}
                    aria-label="Go back"
                  >
                    <ArrowLeft size={18} />
                  </button>


                  <button
                    type="button"
                    className="signup-primary-button"
                    onClick={handleContinue}
                  >
                    <span>
                      Continue
                    </span>

                    <ArrowRight size={18} />
                  </button>

                </div>

              </div>
            )}


            {/* =================================================
                STEP 3 — PROFILE
            ================================================= */}

            {currentStep === 3 && (

              <div className="signup-step-content">

                <div className="form-section-heading">

                  <h3>
                    Create your profile
                  </h3>

                  <p>
                    Help customers learn a little more
                    about you.
                  </p>

                </div>


                {/* Profile image */}

                <div className="profile-upload">

                  <div className="profile-image-wrapper">

                    <div className="profile-image">

                      {profilePreview ? (

                        <img
                          src={profilePreview}
                          alt="Profile preview"
                        />

                      ) : (

                        <UserRound
                          size={38}
                          strokeWidth={1.5}
                        />

                      )}

                    </div>


                    <label
                      htmlFor="profile-image"
                      className="profile-camera"
                    >
                      <Camera size={15} />
                    </label>


                    <input
                      id="profile-image"
                      type="file"
                      accept="image/*"
                      onChange={handleProfileImage}
                      hidden
                    />

                  </div>


                  <p>
                    Add a clear profile photo
                  </p>

                </div>


                {/* Description */}

                <div className="form-field">

                  <label htmlFor="description">
                    About you & your work
                  </label>

                  <div className="form-textarea">

                    <FileText size={17} />

                    <textarea
                      id="description"
                      name="description"
                      placeholder="Tell customers about your skills, experience and the work you provide..."
                      value={
                        formData.profile
                          .description
                      }
                      onChange={handleChange}
                      maxLength={300}
                    />

                  </div>


                  <div className="textarea-footer">

                    <span>
                      A short introduction helps
                      customers understand your
                      services.
                    </span>

                    <span>
                      {
                        formData.profile
                          .description.length
                      }
                      /300
                    </span>

                  </div>

                </div>


                {/* Navigation */}

                <div className="signup-navigation">

                  <button
                    type="button"
                    className="signup-back-button"
                    onClick={handleBack}
                    aria-label="Go back"
                  >
                    <ArrowLeft size={18} />
                  </button>


                  <button
                    type="submit"
                    className="signup-primary-button"
                  >
                    <span>
                      Create account
                    </span>

                    <Check size={18} />
                  </button>

                </div>

              </div>
            )}

          </form>


          {/* ==================================================
              SECURITY NOTE
          ================================================== */}

          <div className="signup-security">

            <Lock size={13} />

            <span>
              Your information is securely handled by
              SpeedXFix.
            </span>

          </div>

        </div>

      </section>


      {/* ======================================================
          MOBILE TRUST STRIP
      ====================================================== */}

      <div className="signup-mobile-trust">

        {trustFeatures.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="mobile-trust-item"
            >
              <Icon size={15} />
              <span>
                {feature.title}
              </span>
            </div>
          );
        })}

      </div>

    </main>
  );
}

export default Signup;