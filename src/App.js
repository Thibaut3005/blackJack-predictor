import { useState } from "react";
import Cards from "./components/Cards";
import Infos from "./components/Infos";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Historic from "./components/Historic"
import Modal from "./components/Modal"


const bankroll = 100

const App = () => {
  const numberOfDecks = 8;
 let colors=[0,255]
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
const [showModal,setShowModal] = useState(true);
  const [selfCount, setSelfCount] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);
  const [aceStateDealer, setAceStateDealer] = useState(false);
  const [aceStateSelf, setAceStateSelf] = useState(false);
  const [blackJackself, setBlackJackSefl] =useState(false);
  const [blackJackdealer, setBlackJackdealer] =useState(false)

  const [cardsLeft, setCardsLeft] = useState(cards);
  const [trueCount,setTrueCount] = useState(0)
  const [color,setColor]= useState(colors)
  
   console.log(selfCount);
  
  return (
    <>
<Modal showModal={showModal}
setShowModal={setShowModal}/>
    <Header/>
    <div id='main-container'>
      <div id="cards-container">
        <Cards
          name={"You"}
          count={selfCount}
          setcount={setSelfCount}
          aceState={aceStateSelf}
          setAceState={setAceStateSelf}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
          trueCount={trueCount}
          setTrueCount={setTrueCount}
          setBlackjack={setBlackJackSefl}

        />
        <Cards
          name={"Dealer"}
          count={dealerCount}
          setcount={setDealerCount}
          aceState={aceStateDealer}
          setAceState={setAceStateDealer}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
          trueCount={trueCount}
          setTrueCount={setTrueCount}
          setBlackjack={setBlackJackdealer}
        />

        <Cards
          name={"Other Players"}
          count={dealerCount}
          setcount={setDealerCount}
          aceState={aceStateDealer}
          setAceState={setAceStateDealer}
          cardsLeft={cardsLeft}
          setCardsLeft={setCardsLeft}
          trueCount={trueCount}
          setTrueCount={setTrueCount}
        />
        <div>
        <Infos
          selfCount={selfCount}
          dealerCount={dealerCount}
          cardsLeft={cardsLeft}
          trueCount={trueCount}
          color={color}
          setColor={setColor}
          blackJackdealer={blackJackdealer}
          blackJackself={blackJackself}
         
        />
        <Buttons
        cards={cards}
        setSelfCount={setSelfCount}
        dealerCount={dealerCount}
        setDealerCount={setDealerCount}
        setCardsLeft={setCardsLeft}
        setTrueCount={setTrueCount}
        setBlackJackdealer={setBlackJackdealer}
        setBlackJackSefl={setBlackJackSefl}
        />
        </div>
       
      </div>
      <Historic/>
      </div>
      
      
    </>
  );
};

export default App;
