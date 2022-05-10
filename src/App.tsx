import { useState } from "react";
import Hand from "./components/Hand";
import cards from "./services/cards";

function App() {
  const [playingCards, setPlayingCards] = useState([]);
  const [handCount, setHandCount] = useState(3);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await cards.draw(handCount);

    if (response?.data.cards) {
      setPlayingCards(response?.data.cards);
    }
  };

  return (
    <div className="App">
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <form onSubmit={(e) => handleSubmit(e)} role="form">
          <input
            role="textbox"
            type="number"
            max={7}
            min={1}
            value={handCount}
            onChange={(e) => {
              setHandCount(parseInt(e.target.value));
            }}
          />

          <button role="button" type="submit">
            Draw Hand
          </button>
        </form>

        <Hand playingCards={playingCards} />
      </section>
    </div>
  );
}

export default App;
