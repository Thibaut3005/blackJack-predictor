import  { useState } from "react";
import Cards from "./components/Cards";


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
      value: 11,
      total: 4 * numberOfDecks,
    },
  ];

  


  
  const [selfCount, setSelfCount] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);
  const [aceStateDealer, setAceStateDealer] = useState(false);
  const [aceStateSelf, setAceStateSelf] = useState(false);
  const [cardsLeft, setCardsLeft] = useState(cards);

  
  const b = cardsLeft.filter(e=> e.value <=  21-selfCount ).reduce((sum, iter) => sum + iter.total, 0)
  
  const bustChance = 100 - (b/cardsLeft[0].total * 100);
  console.log(cardsLeft[10].value);

  return (
    <>
      <div id="main-container">
        <Cards
          
          count={selfCount}
          setcount={setSelfCount}
          aceState={aceStateSelf}
          setAceState={setAceStateSelf}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
        />
        <Cards
          
          count={dealerCount}
          setcount={setDealerCount}
          aceState={aceStateDealer}
          setAceState={setAceStateDealer}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
        />
        {/* 
    <Cards/> */}
        <div id="infos">
          <p>votre total est de {selfCount}</p>
          <p>total de cartes du dealer est {dealerCount}</p>
          <p>total de cartes est {cardsLeft[0].total}</p>
        </div>
        <p>chance de bust= {bustChance}</p>
      </div>
    </>
  );
};

export default App;
