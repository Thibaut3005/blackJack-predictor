import {useState} from 'react'


const Calcul =(props) =>{
    const [bet, setBet] = useState(0);
    console.log(bet);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${bet}`)
  }
    return (
        <form onSubmit={handleSubmit} id="bet-form">
          <label>Enter your name:
            <input placeholder='your bet '
              type="number" 
              
              onChange={(e) => setBet(e.target.value)}
            />
          </label>
          <input type="submit" id="bet-submit" />
        </form>
      )
}
export default Calcul