const Infos = (props) => {
  const b = props.cardsLeft
    .filter((e) => e.value <= 21 - props.selfCount)
    .reduce((sum, iter) => sum + iter.total, 0);
  console.log(b);

  let bustChance = 100 - (b / props.cardsLeft[0].total) * 100;
  bustChance = bustChance.toFixed(2);
  console.log(props.cardsLeft[10].value);

  return (
    <div id="infos">
      <p>votre total est de {props.selfCount}</p>
      <p>total de cartes du dealer est {props.dealerCount}</p>
      <p>total de cartes est {props.cardsLeft[0].total}</p>
      <p>chance de bust= {bustChance}%</p>
    </div>
  );
};
export default Infos;
