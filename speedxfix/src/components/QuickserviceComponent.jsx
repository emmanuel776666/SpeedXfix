
import {
  Wrench,
  Zap,
  Sparkles,
  Hammer,
  Paintbrush,
  MoreHorizontal,
   } from "lucide-react";

function QuickserviceComponent() {
  return (
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
  );
}

export default QuickserviceComponent;