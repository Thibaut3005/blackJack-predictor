import React from 'react'
const Buttons = (props) =>{

const reset = ()=>{
props.setDealerCount(0)
props.setSelfCount(0)
props.setTrueCount(0)


}
const undo = ()=>{

}
const newGame = () =>{
    reset()
    props.setCardsLeft(props.cards)
    
}

    return(
<>
        <button className='reset game-btn' onClick ={reset}> reset</button>
        <button className ='undo game-btn' onClick ={undo}> undo </button>
        <button className='new game game-btn' onClick={newGame}> new game</button>
        </>

    );
}
export default Buttons
