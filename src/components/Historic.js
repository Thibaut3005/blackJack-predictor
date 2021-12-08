

const Historic =(props)=>{


let b = props.historicsLog


 let messages =b.map(function(e){ 

     if (e.number=== 11 || e.number=== 8 ){
        
           e.n ="n"
        }

    
    
    
    if (e.players ==="You"){
        return (e.number ===11 ? `${e.players} have drawn a${e.n} Ace`: `${e.players} have drawn a${e.n} ${e.number}`);
    
 }else
 return (e.number ===11 ? `${e.players} have drawn a${e.n} Ace`: `${e.players} have drawn a${e.n} ${e.number}`);;
}) 
const  rendererHystory = () => {

const keys =Object.keys(messages);
return keys.map((key,index)=>{
    const message=messages[key];
    const lastMessageKey= index === 0? null: keys[index-1];
let pair ="odd"
if(key%2===0){
    pair = "even"
}
    return(
        <div key={`msg_${index}`} className={`chat ${pair}`}>

            {message}
        </div>
    )
})
}
    return(

        <div id='historic'>
            <div id='historic-feed'>
                 {rendererHystory()}
            </div>
                      
       
        </div>

    )
}

export default Historic