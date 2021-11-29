import react, { useState } from "react";
import Cards from "./components/Cards";
import Result from "./components/Result";

const App = () => {
  const nubmerOfDecks = 8;
  const cardsTotal = 52 * nubmerOfDecks;
  let cards = [
    {
      value: 11,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 2,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 3,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 4,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 5,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 6,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 6,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 7,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 8,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 9,
      total: 4 * nubmerOfDecks,
    },
    {
      value: 10,
      total: 4 * nubmerOfDecks,
    },
  ];


  const [total, setTotal] = useState(cardsTotal);
  const [selfCount, setSelfCount] = useState (0);
  const [dealerCount, setDealerCount] = useState (0);
const [aceStateDealer,setAceStateDealer]= useState(false);
const [aceStateSelf,setAceStateSelf]= useState(false)


  
 console.log(aceStateSelf);
  
  
  console.log(total);
  
  return (
    <>
      <div id="main-container">
        <Cards total={total} setTotal={setTotal}  count ={selfCount} setcount={setSelfCount}  aceState={aceStateSelf} setAceState={setAceStateSelf}/>
        <Cards total={total} setTotal={setTotal} count={dealerCount} setcount={setDealerCount}  aceState={aceStateDealer} setAceState={setAceStateDealer}/>{/* 
    <Cards/> */}
    <div><p>votre total est de {selfCount}</p>
    <p>total de cartes du dealer est  {dealerCount}</p>
     <p>total de cartes est  {total}</p></div>
      </div>
    </>
  );
};

export default App;
