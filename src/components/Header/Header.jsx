import "./Header.css"

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__buttons">
        <Link to="/">Home</Link>
        <Link to="/spider-collection">Spider Collection</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  )
}

export default Header;
