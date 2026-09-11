import Background from "../../assets/Webs_Spider-Man.png";
import "./Main.css";


function Main() {
  return (
    <main className="main">
      <div className="main__content">
        <img 
          src={Background} 
          alt="Spider-Man Background" 
          className="main__background" />
      </div>
    </main>
  )
}

export default Main;