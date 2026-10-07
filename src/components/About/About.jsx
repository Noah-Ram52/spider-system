import "./About.css"

import AboutBackground from "../../assets/aboutbackground.png";

function About() {
  return (
    <div className="about">
        <img 
        className="about__background" 
        src={AboutBackground} 
        alt="About Background" />
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  )
}

export default About;