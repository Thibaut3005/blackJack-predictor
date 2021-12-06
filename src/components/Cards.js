import React from "react";

const Cards = (props) => {





  const count = (value) => {
    const cardsupdated = [...props.cardsLeft];
    cardsupdated[value - 1].total -= 1;
    cardsupdated[0].total -= 1;
    props.setCardsLeft(cardsupdated);
    let aceState= props.aceState

    if (value >= 10) {
      props.setTrueCount((prevCount) => (prevCount -=1));
    }
    if (value <= 6) {
        props.setTrueCount((prevCount) => (prevCount +=1));
    }
    if (props.name !== "Other Players") {
      if (value === 11 && props.count <= 11) {
        aceState =true 
        props.setAceState(aceState);
      }
      if (value === 11 && props.count >= 11) {
        value = 1;
        aceState = true 
        props.setAceState(aceState);
      } console.log(aceState);
      if (aceState && (props.count + value > 21)) {
        props.setcount((prevCount) => prevCount + value - 10);
        props.setAceState(false);
      } else {
        props.setcount((prevCount) => prevCount + value);
      }

    
      if(props.count +value === 21 && aceState === true){
        props.setBlackjack(true)
      }
    }
  







}


  return (
    <div className="cards-container">
      <h4 className="name-title">{props.name}</h4>
      <button className="card-btn btn1 btn" id="1" onClick={() => count(11)}>
        
      </button>
      <button className="card-btn btn2 btn" id="2" onClick={() => count(2)}>
        
      </button>
      <button className="card-btn btn3 btn" id="3" onClick={() => count(3)}>
        
      </button>
      <button className="card-btn btn4 btn" id="4" onClick={() => count(4)}>
        
      </button>
      <button className="card-btn btn5 btn" id="5" onClick={() => count(5)}>
        
      </button>
      <button className="card-btn btn6 btn" id="6" onClick={() => count(6)}>
        
      </button>
      <button className="card-btn btn7 btn" id="7" onClick={() => count(7)}>
        
      </button>
      <button className="card-btn btn8 btn" id="8" onClick={() => count(8)}>
        
      </button>
      <button className="card-btn btn9 btn" id="9" onClick={() => count(9)}>
        
      </button>
      <button className="figure-btn figure btn" id="10" onClick={() => count(10)}>
        
      </button>
    </div>
  );
};
export default Cards;
