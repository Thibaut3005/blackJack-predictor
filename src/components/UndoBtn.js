const UndoBtn = (props) => {
  let historic = props.historics;
  let cardsLeft = props.cardsLeft;
  let lastCard = historic[historic.length - 1];
  const undo = () => {
    if (props.historics.length > 0) {


      cardsLeft[lastCard.number - 1].total += 1;
      cardsLeft[0].total += 1;
      props.setCardsLeft(cardsLeft);
      props.setHistorics(historic.pop());
      
      if (lastCard.players === "You") {
        if (props.isAceSelf) {
          props.setSelfCount(
            (prevCount) => (prevCount += 10 - lastCard.number)
          );
          props.setIsAceSelf(false);
        } else {
          props.setSelfCount((prevCount) => (prevCount -= lastCard.number));
        }
      }
      if (lastCard.players === "Dealer") {
        if (props.isAceDealer) {
          props.setDealerCount(
            (prevCount) => (prevCount += 10 - lastCard.number)
          );
          props.setIsAceDealer(false);
        } else {
          props.setDealerCount((prevCount) => (prevCount -= lastCard.number));
        }
      }
      
    }
  };

  return (
    <button className="undo game-btn" onClick={undo}>
      {" "}
      undo{" "}
    </button>
  );
};
export default UndoBtn;
