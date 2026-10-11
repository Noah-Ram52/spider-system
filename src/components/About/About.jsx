import "./About.css"

// Images
import AboutBackground from "../../assets/aboutbackground.png";
import AmazingFantasty from "../../assets/savingcivilian.png";
import MilesMorales from "../../assets/milescomic.png";
import GwenStacy from "../../assets/gwenstacy.png";
import MiguelOHara from "../../assets/miguel.png";

function About() {

  const handleAmazingFantasyRedirect = () => {
    window.location.href = 'https://www.marvel.com/comics/issue/16926/amazing_fantasy_1962_15';
  };
  const handleMilesMoralesRedirect = () => {
    window.location.href = 'https://www.penguinrandomhouseretail.com/book/?isbn=9781302968960';
  };
  const handleGwenStacyRedirect = () => {
    window.location.href = 'https://www.marvel.com/comics/issue/16926/amazing_fantasy_1962_15';
  };
  const handleMiguelOHaraRedirect = () => {
    window.location.href = 'https://www.midtowncomics.com/p/1257419-spider-man-2099-classic-vol-1-tp-new-printing/';
  };

  return (
    <div className="about">
        <img 
        className="about__background" 
        src={AboutBackground} 
        alt="About Background" />
        <div className="about__content">
          <h1 className="about__title">Spider{""} - {""}Verse</h1>
          <p className="about__description">If you want to know more about different Spider-Man characters, you can view them here look at these comics!</p>
        </div>
        <div className="about__comics">
          <button className="about__comic-button" onClick={handleAmazingFantasyRedirect}>
            <img 
              className="about__comic-image"
              src={AmazingFantasty} 
              alt="Amazing Fantasy #15" 
            />
          </button>
          <button className="about__comic-button" onClick={handleMilesMoralesRedirect}>
            <img 
              className="about__comic-image" 
              src={MilesMorales} 
              alt="Miles Morales"
            />
           </button>
          <button className="about__comic-button" onClick={handleGwenStacyRedirect}>
            <img 
              className="about__comic-image" 
              src={GwenStacy} 
              alt="Gwen Stacy" 
            />
          </button>
          <button className="about__comic-button" onClick={handleMiguelOHaraRedirect}>
            <img 
              className="about__comic-image" 
              src={MiguelOHara} 
              alt="Miguel O'Hara" 
            />
          </button>
        </div>
      </div>
  )
}

export default About;