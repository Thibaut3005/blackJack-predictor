import { useState } from "react";
import Cards from "./components/Cards";
import Infos from "./components/Infos";
import OtherPlayerCards from "./components/OtherPlayerCards";

const App = () => {
  const numberOfDecks = 8;

  let cards = [
    {
      value: 1000,
      total: 52 * numberOfDecks,
    },

    {
      value: 2,
      total: 4 * numberOfDecks,
    },
    {
      value: 3,
      total: 4 * numberOfDecks,
    },
    {
      value: 4,
      total: 4 * numberOfDecks,
    },
    {
      value: 5,
      total: 4 * numberOfDecks,
    },
    {
      value: 6,
      total: 4 * numberOfDecks,
    },
    {
      value: 7,
      total: 4 * numberOfDecks,
    },
    {
      value: 8,
      total: 4 * numberOfDecks,
    },
    {
      value: 9,
      total: 4 * numberOfDecks,
    },
    {
      value: 10,
      total: 16 * numberOfDecks,
    },
    {
      value: 1,
      total: 4 * numberOfDecks,
    },
  ];

  const [selfCount, setSelfCount] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);
  const [aceStateDealer, setAceStateDealer] = useState(false);
  const [aceStateSelf, setAceStateSelf] = useState(false);
  const [cardsLeft, setCardsLeft] = useState(cards);
  console.log(cardsLeft);
  return (
    <>
      <div id="main-container">
        <Cards
        name={"Dealer"}
          count={selfCount}
          setcount={setSelfCount}
          aceState={aceStateSelf}
          setAceState={setAceStateSelf}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
        />
        <Cards
        name={"Dealer"}
          count={dealerCount}
          setcount={setDealerCount}
          aceState={aceStateDealer}
          setAceState={setAceStateDealer}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
        />

        <OtherPlayerCards 
        cardsLeft={cardsLeft}
        setCardsLeft={setCardsLeft}
         />
        <Infos
          selfCount={selfCount}
          dealerCount={dealerCount}
          cardsLeft={cardsLeft}
        />
      </div>
    </>
  );
};

export default App;
