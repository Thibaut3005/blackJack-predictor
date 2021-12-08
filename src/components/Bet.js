import {useState} from 'react'


const Bet =(props) =>{
  
    let newBet=0

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setBet(newBet)


  }
    return (
        <form onSubmit={handleSubmit} id="bet-form">


          <label>Enter your bet: 
            <input placeholder='your bet '
              type="number" 
              
              onChange={(e) => newBet=e.target.value}
            />
          </label>
          <input type="submit" id="bet-submit" />
        </form>
      )
}
export default Bet