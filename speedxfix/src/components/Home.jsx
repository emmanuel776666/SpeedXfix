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
    <>
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

      {/* ======================================================
          FOOTER
      ====================================================== */}

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={logo} alt="SpeedXFix logo" />
          <p>Get any job done fast with trusted local professionals.</p>
        </div>

        {/* Social media links — add your profile URLs below */}
        <div className="footer-social">
          <span className="footer-social-label">Follow us</span>

          <div className="social-links">
            {/* TODO: add WhatsApp link (e.g. https://wa.me/234XXXXXXXXXX) */}
            <a href="https://whatsapp.com/channel/0029VbDataHIiRokdefpAz3k" className="social-link" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
            </a>

            {/* TODO: add Facebook link (e.g. https://facebook.com/yourpage) */}
            <a href="" className="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* TODO: add X (Twitter) link (e.g. https://x.com/yourhandle) */}
            <a href="" className="social-link" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} SpeedXFix. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Home;
