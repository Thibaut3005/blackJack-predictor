import {  useEffect } from "react";

const Infos = (props) => {


let trueCount = 0
let red =0;
let green = 255;


if (props.trueCount !==0){
trueCount = (props.trueCount/Math.floor(props.cardsLeft[0].total/52))
trueCount =trueCount.toFixed(1);
}

if (trueCount>0){
  trueCount =`+ ${trueCount}`
}

  const b = props.cardsLeft
    .filter((e) => e.value <= 21 - props.selfCount)
    .reduce((sum, iter) => sum + iter.total, 0);
  

  let bustChance = 100 - (b / props.cardsLeft[0].total) * 100;
  bustChance = bustChance.toFixed(2);

  if (bustChance <= 65){
  green=255
  red= red +((bustChance/100)*255*(225/165.75)) // 165,75 is the number need to have 65 as the middle point in orange 
}
if (bustChance>= 65 && bustChance<100){
red =255
  green= green -((bustChance/100)*255)
}else{
  green=255
  red=0

}



  useEffect(() => {
    document.getElementById("bustChance").style.color = `rgb(${red},${green},0)`
  });
  
  let bj = null
 
  if (props.blackJackself ){
    bj ="vous avez fait un BlackJack congrats"}
  

  return (
    <div id="infos">
      <h4 className='name-title'>{props.name}</h4>
      <p>votre total est de {props.selfCount}</p>
      <p>total de cartes du dealer est {props.dealerCount}</p>
      <p>total de cartes est {props.cardsLeft[0].total}</p>
      <p>chance de bust= <span id='bustChance'>{bustChance}%</span></p>
      <p>true count is currently {trueCount} </p>
      <p>your bet is {props.bet} €</p>
      <p>{bj}</p>
    </div>
  );
};
export default Infos;
