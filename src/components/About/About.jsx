import "./About.css"

// Images
import AboutBackground from "../../assets/aboutbackground.png";
import AmazingFantasty from "../../assets/savingcivilian.png";
import MilesMorales from "../../assets/milescomic.png";
import GwenStacy from "../../assets/gwenstacy.png";
import MiguelOHara from "../../assets/miguel.png";

function About() {

  const redirect = (url) =>  window.open(url, '_blank')
  const links = {
    amazingFantasy: () => { 
      redirect('https://www.marvel.com/comics/issue/16926/amazing_fantasy_1962_15')
    },
    milesMorales: () => { 
      redirect('https://www.penguinrandomhouseretail.com/book/?isbn=9781302968960')
    },
    gwenStacy: () => { 
      redirect('https://www.amazon.com/Spider-Gwen-Gwen-Stacy-Jason-Latour/dp/1302919865')
    },
    miguelOHara: () => { 
      redirect('https://www.midtowncomics.com/p/1257419-spider-man-2099-classic-vol-1-tp-new-printing/')
    }
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
          <button className="about__comic-button" onClick={links.amazingFantasy}>
            <img 
              className="about__comic-image"
              src={AmazingFantasty} 
              alt="Amazing Fantasy #15" 
            />
          </button>
          <button className="about__comic-button" onClick={links.milesMorales}>
            <img 
              className="about__comic-image" 
              src={MilesMorales} 
              alt="Miles Morales"
            />
           </button>
          <button className="about__comic-button" onClick={links.gwenStacy}>

            <img 
              className="about__comic-image" 
              src={GwenStacy} 
              alt="Gwen Stacy" 
            />
          </button>
          <button className="about__comic-button" onClick={links.miguelOHara}>
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