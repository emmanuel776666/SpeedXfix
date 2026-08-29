import "./Homepage.css";
import LogoComponent from "../components/LogoComponent";
import { Bell, MapPin, Search,ChevronDown} from "lucide-react";

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
              <img src="https://i.pravatar.cc/300?img=12" alt="Profile" />
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
2
        </div>


        <div className="containerhomepage3">
3
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