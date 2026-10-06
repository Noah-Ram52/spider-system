import { useEffect, useState } from "react";
import "./ModalCards.css";

function ModalCards({ cards = [] }) {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (!selectedCard) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedCard(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedCard]);

  return (
    <div className="modal-cards">
      <div className="modal-cards__grid">
        {cards.map((card) => (
          <button
            className="modal-cards__item"
            key={card.id}
            type="button"
            onClick={() => setSelectedCard(card)}
          >
            {card.image && (
              <img className="modal-cards__image" src={card.image} alt="" />
            )}
            <span className="modal-cards__title">{card.name}</span>
            <span className="modal-cards__hint">View details</span>
          </button>
        ))}
      </div>

      {selectedCard && (
        <div
          className="modal-cards__backdrop"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedCard(null);
          }}
        >
          <section
            className="modal-cards__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-card-title"
          >
            <button
              className="modal-cards__close"
              type="button"
              aria-label="Close details"
              onClick={() => setSelectedCard(null)}
            >
              &times;
            </button>
            {selectedCard.image && (
              <img
                className="modal-cards__dialog-image"
                src={selectedCard.image}
                alt={selectedCard.name}
              />
            )}
            <h2 id="modal-card-title">{selectedCard.name}</h2>
            {selectedCard.description && <p>{selectedCard.description}</p>}
          </section>
        </div>
      )}
    </div>
  );
}

export default ModalCards;