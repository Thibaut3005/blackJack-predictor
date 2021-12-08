const Modal = (props) => {
    
  let NumberOfdecks= 8
let Bankroll =100    

    const handleSubmit = () =>{
      props.setBankroll(Bankroll)
      props.setNumberOfDecks(NumberOfdecks)
      props.setShowModal(false)

    }
    
    
    return(
<>
   {props.showModal ? <div id='setUpPage'>

   <form onSubmit={handleSubmit} id="setUp-form">
         <label> 
           <input placeholder='your bankroll '
             type="number" 
             
             onChange={(e) => Bankroll = e.target.value}
           />
           <input placeholder='Number of Decks'
             type="number" 
             
             onChange={(e) => NumberOfdecks = e.target.value}
           />
         </label>
         <input type="submit" id="setUp-submit" value="Valider"/>
       </form>
    
       </div> : null}  </>
 )
    }

export default Modal