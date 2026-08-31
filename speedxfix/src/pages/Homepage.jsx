import "./Homepage.css";
import LogoComponent from "../components/LogoComponent";
import { Bell,
    MapPin,
    Search,
  Wrench,
  Zap,
  Sparkles,
  Hammer,
  Paintbrush,
  MoreHorizontal,
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


       <div className="containerhomepage2">

                <button className="quick-service">
                  <Wrench size={27} />
                  <span>Plumbing</span>
                </button>

                <button className="quick-service">
                  <Zap size={27} />
                  <span>Electrical</span>
                </button>

                <button className="quick-service">
                  <Sparkles size={27} />
                  <span>Cleaning</span>
                </button>

                <button className="quick-service">
                  <Hammer size={27} />
                  <span>Carpentry</span>
                </button>

                <button className="quick-service">
                  <Paintbrush size={27} />
                  <span>Painting</span>
                </button>

                <button className="quick-service">
                  <MoreHorizontal size={27} />
                  <span>More</span>
                </button>

              </div>

                <div className="containerhomepage3">

            <div className="popular-services-header">
              <h2>Popular Services</h2>

              <button className="view-all-button">
                View all
              </button>
            </div>

            <div className="popular-services-list">

              <div className="service-card">
                <img src="https://i.pravatar.cc/300?img=12" alt="Plumbing" />
                <h3>Plumbing</h3>
                <p>From ₦15,000</p>
              </div>

              <div className="service-card">
                <img src="https://i.pravatar.cc/300?img=12" alt="Electrical" />
                <h3>Electrical</h3>
                <p>From ₦10,000</p>
              </div>

              <div className="service-card">
                <img src="https://i.pravatar.cc/300?img=12" alt="Cleaning" />
                <h3>Cleaning</h3>
                <p>From ₦8,000</p>
              </div>

              <div className="service-card">
                <img src="https://i.pravatar.cc/300?img=12" alt="Painting" />
                <h3>Painting</h3>
                <p>From ₦12,000</p>
              </div>

            </div>

          </div>


        <div className="containerhomepage4">
4
        </div>


        <div className="containerhomepage5">
          5
        </div>


        <div className="containerhomepage6">
          6
        </div>

        
      </div>
    </div>
  )
}

export default Homepage