import { Link } from "react-router-dom";
import "./Homepage.css";

import LogoComponent from "../components/LogoComponent";
import QuickserviceComponent from "../components/QuickserviceComponent";

import {
  Bell,
  MapPin,
  Search,
  UserRound,
  CalendarDays,
  CircleCheck,
  ArrowRight,
  ShieldCheck,
  House,
  MessageSquare,
  Heart,
  ChevronDown,
} from "lucide-react";

function Homepage() {
  return (
    <div className="containerhomepage">
      <div className="divhomepageall">

        {/* =====================================================
            TOP / HERO SECTION
        ===================================================== */}

        <section className="containerhomepage1">

          {/* Navbar */}
          <div className="homepage-navbar">

            <LogoComponent />

            <div className="notification-profile">

              <button
                className="notification-button"
                aria-label="Notifications"
              >
                <Bell size={21} strokeWidth={2} />

                <span className="notification-dot" />
              </button>

              <button
                className="profile-button"
                aria-label="Open profile"
              >
                <img
                  src="/speedxfix-image.webp"
                  alt="Profile"
                />
              </button>

            </div>

          </div>


          {/* Location */}
          <div className="homepage-location">

            <button className="location-button">

              <MapPin
                className="location-icon"
                size={18}
                strokeWidth={2.5}
              />

              <span className="location-text">
                Benin City, Edo State
              </span>

              <ChevronDown
                className="location-arrow"
                size={16}
                strokeWidth={2}
              />

            </button>

          </div>


          {/* Hero */}
          <div className="homepage-text-image">

            <div className="homepage-text">

              <span className="homepage-eyebrow">
                FIND A PROFESSIONAL
              </span>

              <h1>
                What job do
                <br />
                you need <span>done?</span>
              </h1>

              <p>
                Find trusted professionals near you
                <br />
                and get the job done, fast.
              </p>

            </div>


            <div className="homepage-worker-image">

              <img
                src="/speedxfix-image.webp"
                alt="SpeedXFix professional"
              />

            </div>

          </div>


          {/* Search */}
          <div className="homepage-input">

            <div className="search-box">

              <Search
                size={20}
                strokeWidth={2}
              />

              <input
                type="text"
                placeholder="Search for services, e.g. Plumbing or Cleaning"
              />

              <button>
                Search
              </button>

            </div>

          </div>

        </section>


        {/* =====================================================
            QUICK SERVICES
        ===================================================== */}

        <section className="homepage-section quick-services-section">
          <QuickserviceComponent />
        </section>


        {/* =====================================================
            POPULAR SERVICES
        ===================================================== */}

        <section className="homepage-section containerhomepage3">

          <div className="section-header">

            <div>
              <span className="section-eyebrow">
                EXPLORE
              </span>

              <h2>Popular Services</h2>
            </div>

            <button className="view-all-button">
              View all
              <ArrowRight size={14} />
            </button>

          </div>


          <div className="popular-services-list">

            <div className="service-card">
              <div className="service-card-image">
                <img
                  src="/speedxfixplumbing.webp"
                  alt="Plumbing"
                />
              </div>

              <div className="service-card-content">
                <h3>Plumbing</h3>
                <p>From ₦15,000</p>
              </div>
            </div>


            <div className="service-card">
              <div className="service-card-image">
                <img
                  src="/speedxfixelect.webp"
                  alt="Electrical"
                />
              </div>

              <div className="service-card-content">
                <h3>Electrical</h3>
                <p>From ₦10,000</p>
              </div>
            </div>


            <div className="service-card">
              <div className="service-card-image">
                <img
                  src="/speedxfixcleaning.webp"
                  alt="Cleaning"
                />
              </div>

              <div className="service-card-content">
                <h3>Cleaning</h3>
                <p>From ₦8,000</p>
              </div>
            </div>


            <div className="service-card">
              <div className="service-card-image">
                <img
                  src="/speedxfixpainting.webp"
                  alt="Painting"
                />
              </div>

              <div className="service-card-content">
                <h3>Painting</h3>
                <p>From ₦12,000</p>
              </div>
            </div>

          </div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section className="homepage-section containerhomepage4">

          <div className="section-header simple-header">

            <div>
              <span className="section-eyebrow">
                SIMPLE PROCESS
              </span>

              <h2>How it works</h2>
            </div>

          </div>


          <div className="how-it-works-list">

            <div className="how-step">

              <div className="how-step-icon-wrapper">
                <Search
                  className="how-step-icon"
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3>Search</h3>

                <p>
                  Find the service
                  <br />
                  you need
                </p>
              </div>

            </div>


            <ArrowRight
              className="how-step-arrow"
              size={18}
            />


            <div className="how-step">

              <div className="how-step-icon-wrapper">
                <UserRound
                  className="how-step-icon"
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3>Choose</h3>

                <p>
                  Select a trusted
                  <br />
                  professional
                </p>
              </div>

            </div>


            <ArrowRight
              className="how-step-arrow"
              size={18}
            />


            <div className="how-step">

              <div className="how-step-icon-wrapper">
                <CalendarDays
                  className="how-step-icon"
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3>Book</h3>

                <p>
                  Pick a date and
                  <br />
                  agree on details
                </p>
              </div>

            </div>


            <ArrowRight
              className="how-step-arrow"
              size={18}
            />


            <div className="how-step">

              <div className="how-step-icon-wrapper">
                <CircleCheck
                  className="how-step-icon"
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h3>Done</h3>

                <p>
                  Job completed
                  <br />
                  to your satisfaction
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            WHY SPEEDXFIX
        ===================================================== */}

        <section className="homepage-section containerhomepage5">

          <div className="why-speedxfix-content">

            <div className="why-speedxfix-text">

              <span className="section-eyebrow">
                WHY SPEEDXFIX
              </span>

              <h2>
                Service you can
                <br />
                actually trust.
              </h2>


              <div className="why-features">

                <div className="why-feature">
                  <CircleCheck size={16} />
                  <span>Verified & reviewed professionals</span>
                </div>

                <div className="why-feature">
                  <CircleCheck size={16} />
                  <span>Fast and reliable service</span>
                </div>

                <div className="why-feature">
                  <CircleCheck size={16} />
                  <span>Secure payments</span>
                </div>

                <div className="why-feature">
                  <CircleCheck size={16} />
                  <span>Satisfaction guaranteed</span>
                </div>

              </div>

            </div>


            <div className="why-speedxfix-icon">

              <div className="shield-background">

                <ShieldCheck
                  size={72}
                  strokeWidth={1.4}
                />

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            BOTTOM NAVIGATION
        ===================================================== */}

        <nav className="containerhomepage6">

          <button className="bottom-nav-item active">

            <House size={21} strokeWidth={2} />

            <span>Home</span>

          </button>


          <button className="bottom-nav-item">

            <CalendarDays size={21} strokeWidth={2} />

            <span>Bookings</span>

          </button>


          <button className="bottom-nav-item">

            <MessageSquare size={21} strokeWidth={2} />

            <span>Messages</span>

          </button>


          <button className="bottom-nav-item">

            <Heart size={21} strokeWidth={2} />

            <span>Favorites</span>

          </button>


          <Link
            to="/profile"
            className="bottom-nav-item"
          >

            <UserRound size={21} strokeWidth={2} />

            <span>Profile</span>

          </Link>

        </nav>

      </div>
    </div>
  );
}

export default Homepage;