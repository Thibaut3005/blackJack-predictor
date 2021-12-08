import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import Infos from "./components/Infos";
import Buttons from "./components/Buttons";
import Header from "./components/Header";
import Historic from "./components/Historic";
import Modal from "./components/Modal";
import UndoBtn from "./components/UndoBtn";

const App = () => {
  const [numberOfDecks, setNumberOfDecks] = useState(8);
  let historic = [];
  let colors = [0, 255];
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
  

  const [showModal, setShowModal] = useState(false);
  const [bankroll, setBankroll] = useState(100);
  const [historics, setHistorics] = useState(historic);
  const [selfCount, setSelfCount] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);
  const [aceStateDealer, setAceStateDealer] = useState(false);
  const [aceStateSelf, setAceStateSelf] = useState(false);
  const [blackJackself, setBlackJackSefl] = useState(false);
  const [blackJackdealer, setBlackJackdealer] = useState(false);
  const [bet, setBet] = useState(0);
  const [cardsLeft, setCardsLeft] = useState(cards);
  const [trueCount, setTrueCount] = useState(0);
  const [color, setColor] = useState(colors);
  const [isAceSelf, setIsAceSelf] = useState(false);
  const [isAceDealer, setIsAceDealer] = useState(false);
  const[historicsLog,setHistoricsLog] = useState(historic)

  useEffect(() => {
    setCardsLeft(cards);
  }, [numberOfDecks]);
console.log(bankroll);
  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        setNumberOfDecks={setNumberOfDecks}
        setBankroll={setBankroll}
      />
      <Header />
      <div id="main-container">
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
            historics={historics}
            setHistorics={setHistorics}
            setIsAce={setIsAceSelf}
            setHistoricsLog={setHistoricsLog}
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
            historics={historics}
            setHistorics={setHistorics}
            setIsAce={setIsAceDealer}
            setHistoricsLog={setHistoricsLog}
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
            historics={historics}
            setHistorics={setHistorics}
            setHistoricsLog={setHistoricsLog}
          />
          <div id="button-div">
            <Buttons
              cards={cards}
              
              historic={historic}
              bet={bet}
              setBet={setBet}
              setBankroll={setBankroll}
              selfCount={selfCount}
              setSelfCount={setSelfCount}
              blackJackself={blackJackself}
              dealerCount={dealerCount}
              setDealerCount={setDealerCount}
              setCardsLeft={setCardsLeft}
              setTrueCount={setTrueCount}
              setBlackJackdealer={setBlackJackdealer}
              setBlackJackSefl={setBlackJackSefl}
              historics={historics}
              blackJackdealer={blackJackdealer}
              setHistorics={setHistorics}
              setIsAceDealer={setIsAceDealer}
              setIsAceSelf={setIsAceSelf}

          
              setHistoricsLog={setHistoricsLog}
            />
            <UndoBtn
              historics={historics}
              setHistorics={setHistorics}
              setSelfCount={setSelfCount}
              setDealerCount={setDealerCount}
              cardsLeft={cardsLeft}
              setCardsLeft={setCardsLeft}
              isAceDealer={isAceDealer}
              setIsAceDealer={setIsAceDealer}
              isAceSelf={isAceSelf}
              setIsAceSelf={setIsAceSelf}
                       />
          </div>
        </div>
        <div id="recap-div">
          <Historic historicsLog={historicsLog} />
          <Infos
            selfCount={selfCount}
            dealerCount={dealerCount}
            cardsLeft={cardsLeft}
            trueCount={trueCount}
            color={color}
            setColor={setColor}
            blackJackdealer={blackJackdealer}
            blackJackself={blackJackself}
            bet={bet}
            bankroll={bankroll}
          />
        </div>
      </div>
    </>
  );
};

export default App;
