import "./Homepage.css";
import LogoComponent from "../components/LogoComponent";
import { Bell} from "lucide-react";

function Homepage () {
  return (
    <div className="containerhomepage">
      <div className="divhomepageall">

        <div className="containerhomepage1">
        {/* <div className="homepage-navbar">
        <LogoComponent />
        <div className="notification-profile">
          
        </div>
        </div> */}
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

         </div>
         <div className="homepage-text-image">

         </div>
         <div className="homepage-input">

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