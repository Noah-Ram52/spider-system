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
    name: "Spider-Man Peter Parker",
    image: PeterParker,
    description: "Earth-616\u2019s original Spider-Man, Peter Parker uses his spider powers and scientific ingenuity to protect others while balancing everyday life.",
  },
  {
    id: "Spider-Man 1994",
    name: "Spider-Man Miles Morales",
    image: MilesMorales,
    description: "Miles Morales is a Brooklyn hero with camouflage and bioelectric powers who brings his own identity to the Spider-Man mantle.",
  },
  {
    id: "Spider-Woman",
    name: "Spider-Woman Gwen Stacy",
    image: GwenStacy,
    description: "Gwen Stacy is Earth-65\u2019s Spider-Woman, also known as Ghost-Spider. She balances protecting her world with her passion for music.",
  },
  {
    id: "Spider-Man 2099",
    name: "Spider-Man 2099 Miguel O'Hara",
    image: MiguelOHara,
    description: "Miguel O\u2019Hara is a futuristic geneticist who uses organic webs, talons, and enhanced senses to fight corporate corruption.",
  },
];

function Spider_Collection() {

  const handleRedirect = () => {
    window.location.href = 'https://www.marvel.com/search?offset=0&query=Spider-man';
  };

  return (
    <div className="spider-collection">
      <img 
        className="spider-collection__background" 
        src={SpiderVerse} 
        alt="SpiderVerse" />
      <ModalCards cards={spiderCards} />
      <p className="spider-collection__spider-man_characters">
        Here you can view more 
        <button 
          className="spider-collection__spider-man_characters_link" 
          onClick={handleRedirect}> Spider-Man characters</button> 
        from the Marvel Universe!
      </p>
    </div>
  );
}

export default Spider_Collection;