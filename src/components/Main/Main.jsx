// React 
import { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./Main.css";

// Images & GIFs
import Background from "../../assets/Webs_Spider-Man.png";
import PortalStill from "../../assets/spiderverse_portal_static.png";
import SpiderGif from "../../assets/spiderverse_portal.gif";
import SmallSpider from "../../assets/smallspider.png";

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
          {/* onMouseEnter & onMouseLeave are event handlers installed with React */}
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
        <div className="main__small_summary">
          <p className="main__small_summary-text_title">
            With great power comes great responsibility.
            <br />
            Uncle Ben, Spider-Man 2002
          </p>
          <p className="main__small_summary-text">
            Being Spider-Man means choosing to do what is right, even when it is difficult. Peter Parker has strength which makes him powerful, but his compassion makes him a hero. The quote reminds us that what matters most is not what we can do, but how we use our abilities to help others.
          </p>
          <img className="main__additional-content" src={SmallSpider} alt="Swinging Spider-Man" />
        </div>
      </div>
    </main>
  );
}

export default Main;