// Styles
import "./Spider_Collection.css";

// Components
import ModalCards from "../ModalCards/ModalCards";

// Images
import SpiderVerse from "../../assets/spider-verse.png";
import PeterParker from "../../assets/spider-man-amazing-ultimate-peter-mj-relationship.png";
import MilesMorales from "../../assets/spider-man-beyond-the-spider-verse.png";
import GwenStacy from "../../assets/gwen stacy.png";
import MiguelOHara from "../../assets/spider-man_2099.png";

  const spiderCards = [
  {
    id: "Spider-Man 1967",
    name: "Spider-Man Peter Parker Earth-616",
    image: PeterParker,
    description: "Add this character's universe, abilities, and story here.",
  },
  {
    id: "Spider-Man 1994",
    name: "Spider-Man Miles Morales",
    image: MilesMorales,
    description: "Replace this sample content with your character details.",
  },
  {
    id: "Spider-Woman",
    name: "Spider-Woman Gwen Stacy",
    image: GwenStacy,
    description: "You can also add an image path to each card's data.",
  },
  {
    id: "Spider-Man 2099",
    name: "Spider-Man 2099 Miguel O'Hara",
    image: MiguelOHara,
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