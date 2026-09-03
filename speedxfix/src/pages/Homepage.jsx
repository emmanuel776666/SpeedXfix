import { Link } from "react-router-dom";
import "./Homepage.css";
import LogoComponent from "../components/LogoComponent";
import QuickserviceComponent from "../components/QuickserviceComponent";
import { Bell,
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
    ChevronDown} from "lucide-react";

function Homepage () {
  return (
    <div className="containerhomepage">
      <div className="divhomepageall">

        <div className="containerhomepage1">
       
                  <div className="homepage-navbar">

            <LogoComponent />

            <div className="notification-profile">

              {/* Notification */}
              <button className="notification-button">
                <Bell size={23} strokeWidth={2} />
                <span className="notification-dot"></span>
              </button>

              {/* Small Profile */}
              <button className="profile-button">
              <img src="/speedxfix-image.jpeg" alt="Profile" />
            </button>

            </div>

          </div>
         <div className="homepage-location">

          <button className="location-button">

            <MapPin
              className="location-icon"
              size={20}
              strokeWidth={2.5}
            />

            <span className="location-text">
              Benin City, Edo State
            </span>

            <ChevronDown
              className="location-arrow"
              size={18}
              strokeWidth={2}
            />

          </button>

        </div>
        <div className="homepage-text-image">

            <div className="homepage-text">

              <h1>
                What job do
                <br />
                you need <span>done</span>?
              </h1>

              <p>
                Find trusted professionals near you
                <br />
                and get the job done, fast.
              </p>

            </div>


            <div className="homepage-worker-image">

              <img
                src="/speedxfix-image.jpeg"
                alt="SpeedXFix professional"
              />

            </div>

          </div>
         <div className="homepage-input">

            <div className="search-box">

              <Search size={22} strokeWidth={2} />

              <input
                type="text"
                placeholder="Search for services (e.g. Plumbing, Cleaning...)"
              />

              <button>
                Search
              </button>

            </div>

          </div>
        </div>


       <QuickserviceComponent/>

                <div className="containerhomepage3">

            <div className="popular-services-header">
              <h2>Popular Services</h2>

              <button className="view-all-button">
                View all
              </button>
            </div>

            <div className="popular-services-list">

              <div className="service-card">
                <img src="/speedxfixplumbing.jpeg" alt="Plumbing" />
                <h3>Plumbing</h3>
                <p>From ₦15,000</p>
              </div>

              <div className="service-card">
                <img src="/speedxfixelect.jpeg" alt="Electrical" />
                <h3>Electrical</h3>
                <p>From ₦10,000</p>
              </div>

              <div className="service-card">
                <img src="/speedxfixcleaning.jpeg" alt="Cleaning" />
                <h3>Cleaning</h3>
                <p>From ₦8,000</p>
              </div>

              <div className="service-card">
                <img src="/speedxfixpainting.jpeg" alt="Painting" />
                <h3>Painting</h3>
                <p>From ₦12,000</p>
              </div>

            </div>

          </div>


        <div className="containerhomepage4">

                <div className="how-it-works-title">
                  <h2>How it works</h2>
                </div>

              <div className="how-it-works-list">

                        {/* SEARCH */}
                        <div className="how-step">

                          <Search
                            className="how-step-icon"
                            size={25}
                            strokeWidth={2}
                          />

                          <h3>1. Search</h3>

                          <p>
                            Find the right
                            <br />
                            service you need
                          </p>

                        </div>


                        {/* ARROW */}
                        <ArrowRight
                        className="how-step-arrow"
                        size={18}
                        strokeWidth={2}
                      />


                        {/* CHOOSE */}
                        <div className="how-step">

                          <UserRound
                            className="how-step-icon"
                            size={25}
                            strokeWidth={2}
                          />

                          <h3>2. Choose</h3>

                          <p>
                            Select a trusted
                            <br />
                            professional
                          </p>

                        </div>


                        {/* ARROW */}
                        <ArrowRight
                          className="how-step-arrow"
                          size={18}
                          strokeWidth={2}
                        />


                        {/* BOOK */}
                        <div className="how-step">

                          <CalendarDays
                            className="how-step-icon"
                            size={25}
                            strokeWidth={2}
                          />

                          <h3>3. Book</h3>

                          <p>
                            Pick a date and
                            <br />
                            agree on details
                          </p>

                        </div>


                        {/* ARROW */}
                        <ArrowRight
                          className="how-step-arrow"
                          size={18}
                          strokeWidth={2}
                        />


                        {/* DONE */}
                        <div className="how-step">

                          <CircleCheck
                            className="how-step-icon"
                            size={25}
                            strokeWidth={2}
                          />

                          <h3>4. Done</h3>

                          <p>
                            Job completed
                            <br />
                            to your satisfaction
                          </p>

                        </div>

                      </div>
              </div>


        <div className="containerhomepage5">

                <div className="why-speedxfix-content">

                  {/* LEFT SIDE */}
                  <div className="why-speedxfix-text">

                    <h2>
                      Why choose SpeedXFix?
                    </h2>

                    <div className="why-feature">
                      <CircleCheck size={15} />
                      <span>Verified & reviewed professionals</span>
                    </div>

                    <div className="why-feature">
                      <CircleCheck size={15} />
                      <span>Fast and reliable service</span>
                    </div>

                    <div className="why-feature">
                      <CircleCheck size={15} />
                      <span>Secure payments</span>
                    </div>

                    <div className="why-feature">
                      <CircleCheck size={15} />
                      <span>Satisfaction guaranteed</span>
                    </div>

                  </div>


                  {/* RIGHT SIDE */}
                  
              <div className="why-speedxfix-icon">

                <div className="shield-background">

                  <ShieldCheck
                    size={75}
                    strokeWidth={1.5}
                  />

                </div>

              </div>
                </div>

              </div>

        <div className="containerhomepage6">

                  {/* HOME */}
                  <button className="bottom-nav-item active">
                    <House size={22} strokeWidth={2} />
                    <span>Home</span>
                  </button>

                  {/* BOOKINGS */}
                  <button className="bottom-nav-item">
                    <CalendarDays size={22} strokeWidth={2} />
                    <span>Bookings</span>
                  </button>

                  {/* MESSAGES */}
                  <button className="bottom-nav-item">
                    <MessageSquare size={22} strokeWidth={2} />
                    <span>Messages</span>
                  </button>

                  {/* FAVORITES */}
                  <button className="bottom-nav-item">
                    <Heart size={22} strokeWidth={2} />
                    <span>Favorites</span>
                  </button>

                  {/* PROFILE */}
                  <Link to="/profile" className="bottom-nav-item">
                  <UserRound size={22} strokeWidth={2} />
                  <span>Profile</span>
                </Link>

                </div>
        
      </div>
    </div>
  )
}

export default Homepage