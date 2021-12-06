const Modal = (props) => {
    
    
    let Bankroll =0
    let NumberOfdecks=0

    const handleSubmit = () =>{
        console.log(Bankroll)
        console.log(NumberOfdecks);
        props.setShowModal(false)
    }
    
    
    return(
<>
   {props.showModal ? <div id='setUpPage'>

   <form onSubmit={handleSubmit} id="setUp-form">
         <label>Enter your name:
           <input placeholder='your bankroll '
             type="number" 
             
             onChange={(e) => Bankroll = e.target.value}
           />
           <input placeholder='Number of Decks'
             type="number" 
             
             onChange={(e) => NumberOfdecks = e.target.value}
           />
         </label>
         <input type="submit" id="setUp-submit" />
       </form>
    
       </div> : null}  </>
 )
    }

export default Modal