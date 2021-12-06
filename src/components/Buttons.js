import React from 'react'
import Calcul from './Calcul'
const Buttons = (props) =>{

const reset = ()=>{
props.setDealerCount(0)
props.setSelfCount(0)
props.setBlackJackSefl(0)
props.setBlackJackdealer(0)



}
const undo = ()=>{

}
const newGame = () =>{
    reset()
    props.setCardsLeft(props.cards)
    props.setTrueCount(0)
}
if (props.dealerCount >= 17){
    reset()
    
}

    return(
<> <Calcul/>
        <button className='reset game-btn' onClick ={reset}> reset</button>
        <button className ='undo game-btn' onClick ={undo}> undo </button>
        <button className='new game game-btn' onClick={newGame}> new game</button>
        </>

    );
}
export default Buttons
