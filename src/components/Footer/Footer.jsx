import "./Footer.css";

import Footer_Background from "../../assets/Marvel_Logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; 2026 Marvel. All characters & rights reserved.</p>
      <img 
      src={Footer_Background} 
      alt="Marvel Logo" 
      className="footer__logo" />
    </footer>
  );
}

export default Footer;