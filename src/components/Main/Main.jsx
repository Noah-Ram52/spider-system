// React 
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Main.css";

// Images & GIFs
import Background from "../../assets/Webs_Spider-Man.png";
import PortalStill from "../../assets/spiderverse_portal_static.png";
import SpiderGif from "../../assets/spiderverse_portal.gif";

function Main() {
  const [isPortalHovered, setIsPortalHovered] = useState(false);

  return (
    <main className="main">
      <div className="main__content">
        <img
          src={Background}
          alt="Spider-Man Background"
          className="main__background"
        />
        <div className="main__direct_link">
          <h2 className="main__direct_link-text">Enter the Spider-Verse</h2>
          <Link
            to="/spider-collection"
            className="main__portal-link"
            onMouseEnter={() => setIsPortalHovered(true)}
            onMouseLeave={() => setIsPortalHovered(false)}
            aria-label="Open Spider Collection"
          >
            <img
              src={isPortalHovered ? SpiderGif : PortalStill}
              alt="Spider-Verse Portal"
              className="main__spiderverse_portal"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Main;