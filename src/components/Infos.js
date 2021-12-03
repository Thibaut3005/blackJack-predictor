
const Infos = (props) => {


let trueCount = 0
let color = [...props.color]

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


if (bustChance <= 50){
 color[0] = (bustChance/100*255/0.5)
 
}
else {
  color[1] = props.color[1] - (bustChance/100*255/0.5)}
 props.setColor(color)


  
    document.getElementById("bustChance").style.color = `rgb(${props.color[0]},${props.color[1]},0)`




//  let blackJack =false 
  
  

  return (
    <div id="infos">
      <h4 className='name-title'>{props.name}</h4>
      <p>votre total est de {props.selfCount}</p>
      <p>total de cartes du dealer est {props.dealerCount}</p>
      <p>total de cartes est {props.cardsLeft[0].total}</p>
      <p>chance de bust= <span id='bustChance'>{bustChance}%</span></p>
      <p>true count is currently {trueCount} </p>
    </div>
  );
};
export default Infos;
