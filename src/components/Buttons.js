import React from 'react'
import Bet from './Bet'
const Buttons = (props) => {


    let cote = 0
    const result = () => {
        if (props.selfCount > 21) { cote = -1 }

        if (props.blackJackself && props.blackJackdealer) { cote = 1 }
        if (props.blackJackself && !props.blackJackdealer) {
            cote = 2.5
        }
        if (!props.blackJackself && props.blackJackdealer) {
            cote = -1
        }
        if (props.selfCount > props.dealerCount) {
            cote = 2

        }
        if (props.selfCount <= 21 && props.dealerCount > 21) {
            cote = 2
        }
        if (props.selfCount <= 21 && props.dealerCount > props.selfCount) {
            cote = -1

        } if (props.selfCount === props.dealerCount) {
            cote = 1
        }
        return(cote)

    }
console.log(cote);
    const reset = () => {


        let gain = props.bet * cote
        console.log(gain);
        props.setBankroll((prevCount) => (prevCount += gain))
        props.setDealerCount(0)
        props.setSelfCount(0)
        props.setBlackJackSefl(0)
        props.setBlackJackdealer(0)
        props.setIsAceDealer(false)
        props.setIsAceSelf(false)


    }

    const newGame = () => {
        reset()
        props.setCardsLeft(props.cards)
        props.setTrueCount(0)
        props.setHistorics(props.historic)
        props.setHistoricsLog(props.historic)









    }
    if (props.dealerCount >= 17) {
        setTimeout(() => {
            reset()
        }, 1500);


    }

    return (
        <> <Bet bet={props.bet}
            setBet={props.setBet} />
            <button className='reset game-btn' onClick={reset}> reset</button>

            <button className='new game game-btn' onClick={newGame}> new game</button>
        </>

    );
}
export default Buttons
