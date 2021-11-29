import React from "react";

const Cards = (props) => {
    
    const cardsupdated = props.cardsLeft

  const count = (value) => {
    
   cardsupdated[value-1].total -= 1;
   cardsupdated[0].total -=1;
    props.setCardsLeft(cardsupdated)
    if (props.aceState){
        props.cardsLeft[10].value =11
            }else{
                props.cardsLeft[10].value =1

            }

if (value=== 11 && props.count <= 11){
    props.setAceState(true)
};
if (value=== 11 && props.count >=11){
    
    value = 1
}
 if ((props.aceState) & (props.count +value > 21)) {
        props.setcount((prevCount) => prevCount + value - 10);
    props.setAceState(false)
      
    } else {
      
      props.setcount((prevCount) => prevCount + value);
    }

    

    console.log(cardsupdated[value-1].total); 



    
  };

  return (
    <div className="cards-container">
      <h2 className="name-title">Dealer</h2>
      <button
        className="card-btn btn1"
        id="1"
        
        onClick={() => count(11)}
        
      >
        1
      </button>
      <button className="card-btn btn2" id="2" onClick={() => count(2)}>
        2
      </button>
      <button className="card-btn btn3" id="3" onClick={() => count(3)}>
        3
      </button>
      <button className="card-btn btn4" id="4" onClick={() => count(4)}>
        4
      </button>
      <button className="card-btn btn5" id="5" onClick={() => count(5)}>
        5
      </button>
      <button className="card-btn btn6" id="6" onClick={() => count(6)}>
        6
      </button>
      <button className="card-btn btn7" id="7" onClick={() => count(7)}>
        7
      </button>
      <button className="card-btn btn8" id="8" onClick={() => count(8)}>
        8
      </button>
      <button className="card-btn btn9" id="9" onClick={() => count(9)}>
        9
      </button>
      <button className="figure-btn figure" id="10" onClick={() => count(10)}>
        Figure
      </button>
    </div>
  );
};
export default Cards;
