// Styles
import "./Spider_Collection.css";

// Images
import SpiderVerse from "../../assets/spider-verse.png";

function Spider_Collection() {
  return (
    <div className="spider-collection">
      <img 
        className="spider-collection__background" 
        src={SpiderVerse} 
        alt="SpiderVerse" />
      <h2>Spider Collection</h2>
      <p>This is the Spider Collection App</p>
    </div>
  );
}

export default Spider_Collection;