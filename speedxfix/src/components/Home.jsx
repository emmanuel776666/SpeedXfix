import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Zap,
  Sparkles,
  Hammer,
  Paintbrush,
  MoreHorizontal,
  ShieldCheck,
  Clock3,
  LockKeyhole,
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Star,
} from "lucide-react";

import logo from "../assets/logo.webp";
import customer1 from "../assets/customer-1.png";

// ============================================================
// HOME PAGE
// ============================================================

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // ----------------------------------------------------------
  // Service categories
  // Keeping these as data makes the UI easier to maintain.
  // ----------------------------------------------------------

  const services = [
    {
      name: "Plumbing",
      icon: Wrench,
    },
    {
      name: "Electrical",
      icon: Zap,
    },
    {
      name: "Cleaning",
      icon: Sparkles,
    },
    {
      name: "Carpentry",
      icon: Hammer,
    },
    {
      name: "Painting",
      icon: Paintbrush,
    },
    {
      name: "More",
      icon: MoreHorizontal,
    },
  ];

  // ----------------------------------------------------------
  // Trust features
  // ----------------------------------------------------------

  const trustFeatures = [
    {
      icon: CheckCircle2,
      title: "Verified Professionals",
      description: "Every professional is verified and reviewed.",
    },
    {
      icon: Clock3,
      title: "Fast & Reliable",
      description: "Quick booking and dependable service.",
    },
    {
      icon: LockKeyhole,
      title: "Secure Payments",
      description: "Pay safely through SpeedXFix.",
    },
  ];

  return (
    <main className="home-page">
      {/* ======================================================
          NAVBAR
      ====================================================== */}

      <header className="navbar-wrapper">
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="SpeedXFix logo" />
          </Link>

          {/* Desktop navigation */}
          <div className="desktop-nav">
            <Link to="/">Home</Link>
            <a href="#services">Services</a>
            <a href="#how-it-works">How it works</a>
            <a href="#trust">Why SpeedXFix</a>
          </div>

          {/* Desktop authentication actions */}
          <div className="desktop-actions">
            <Link to="/login" className="login-link">
              Login
            </Link>

            <Link to="/signup" className="signup-button">
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* ====================================================
            MOBILE MENU
        ==================================================== */}

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>
            How it works
          </a>

          <a href="#trust" onClick={() => setMenuOpen(false)}>
            Why SpeedXFix
          </a>

          <div className="mobile-menu-actions">
            <Link
              to="/login"
              className="mobile-login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="mobile-signup"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* ======================================================
          HERO SECTION
      ====================================================== */}

      <section className="hero-section">
        <div className="hero-content">
          {/* Left side — hero copy */}
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="eyebrow-dot"></span>
              Reliable help, right when you need it
            </div>

            <h1>
              Get any job
              <br />
              done <span>fast.</span>
            </h1>

            <p className="hero-description">
              Find trusted professionals for plumbing, electrical work,
              cleaning, repairs, and everything in between.
            </p>

            {/* Hero actions */}
            <div className="hero-actions">
              <Link to="/signup" className="primary-cta">
                Find a professional
                <ArrowRight size={18} />
              </Link>

              <a href="#services" className="secondary-cta">
                Explore services
              </a>
            </div>

            {/* Trust indicators */}
            <div className="hero-trust-list">
              {trustFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="hero-trust-item" key={feature.title}>
                    <div className="hero-trust-icon">
                      <Icon size={17} strokeWidth={2} />
                    </div>

                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side — visual/hero card */}
          <div className="hero-visual">
            <div className="hero-image-card">
              {/* Decorative background element */}
              <div className="hero-glow"></div>

              <div className="hero-card-content">
                <div className="hero-card-badge">
                  <CheckCircle2 size={15} />
                  Verified professional
                </div>

                <div className="hero-card-main">
                  <div className="hero-card-icon">
                    <Wrench size={32} />
                  </div>

                  <div>
                    <span>Popular service</span>
                    <h3>Home Repairs</h3>
                  </div>
                </div>

                <div className="hero-card-rating">
                  <div className="mini-avatars">
                    <img src={customer1} alt="" />
                    <img src={customer1} alt="" />
                    <img src={customer1} alt="" />
                  </div>

                  <div>
                    <strong>4.8</strong>
                    <span>
                      <Star size={13} fill="currentColor" />
                      Trusted by customers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SERVICES SECTION
      ====================================================== */}

      <section className="services-section" id="services">
        <div className="section-heading">
          <div>
            <span className="section-eyebrow">OUR SERVICES</span>

            <h2>What can we help you with?</h2>
          </div>

          <p>
            Whatever needs fixing, cleaning, building, or improving, there's a
            professional ready to help.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <button className="service-card" key={service.name}>
                <div className="service-icon">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <span>{service.name}</span>

                <ArrowRight className="service-arrow" size={17} />
              </button>
            );
          })}
        </div>
      </section>

      {/* ======================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="how-section" id="how-it-works">
        <div className="section-heading centered-heading">
          <span className="section-eyebrow">SIMPLE PROCESS</span>

          <h2>Getting help shouldn't be complicated.</h2>

          <p>Find the right professional in just a few simple steps.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>

            <h3>Choose a service</h3>

            <p>
              Tell us what you need help with and explore available
              professionals.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>

            <h3>Pick your professional</h3>

            <p>
              Compare profiles, reviews, and service details before making your
              choice.
            </p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>

            <h3>Get the job done</h3>

            <p>
              Book your professional and get the job handled quickly and
              reliably.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================
          TRUST SECTION
      ====================================================== */}

      <section className="trust-section" id="trust">
        <div className="trust-inner">
          <div className="trust-shield">
            <ShieldCheck size={28} strokeWidth={1.7} />
          </div>

          <div className="trust-copy">
            <h2>Trusted by thousands of customers</h2>

            <p>
              Quality service, verified professionals, and a smoother way to get
              things done.
            </p>
          </div>

          <div className="trust-rating">
            <div className="customer-images">
              <img src={customer1} alt="Customer" />
              <img src={customer1} alt="Customer" />
              <img src={customer1} alt="Customer" />
              <img src={customer1} alt="Customer" />
            </div>

            <div className="rating-score">
              <strong>4.8/5</strong>

              <div className="stars">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          FINAL CTA
      ====================================================== */}

      <section className="final-cta">
        <div>
          <span className="section-eyebrow">READY WHEN YOU ARE</span>

          <h2>Let's get that job done.</h2>

          <p>Find a trusted professional and get started today.</p>
        </div>

        <Link to="/signup" className="primary-cta cta-white">
          Get started
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Home;
