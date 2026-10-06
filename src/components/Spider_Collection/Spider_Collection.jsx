// Styles
import "./Spider_Collection.css";

// Components
import ModalCards from "../ModalCards/ModalCards";

// Images
import SpiderVerse from "../../assets/spider-verse.png";

const spiderCards = [
  {
    id: "spider-1",
    name: "Spider Card 1",
    description: "Add this character's universe, abilities, and story here.",
  },
  {
    id: "spider-2",
    name: "Spider Card 2",
    description: "Replace this sample content with your character details.",
  },
  {
    id: "spider-3",
    name: "Spider Card 3",
    description: "You can also add an image path to each card's data.",
  },
];

function Spider_Collection() {
  return (
    <div className="spider-collection">
      <img 
        className="spider-collection__background" 
        src={SpiderVerse} 
        alt="SpiderVerse" />
      <ModalCards cards={spiderCards} />
    </div>
  );
}

export default Spider_Collection;