import  {useState} from 'react';
import JSConfetti from 'js-confetti';
import './App.css'
function App(){
    const [player,setPlayer]=useState('O')
    const[result,setResult]=useState('')
    const[count,setcount]=useState(0)
    const[game,setgame]=useState(true)
    const jsConfetti =new JSConfetti()

    const disbaleclick=(id)=>{
        document.getElementById(id).style.pointerEvents="none"
    }

const checkwinner=()=>{
  
    const values=[]
    for(let i=1;i<=9;i++){
        values[i]=document.getElementById(`cell${i}`).innerHTML
    }
    if(player==values[1]&&player==values[2]&&player==values[3]){
        setResult(player+" is winner")
        document.getElementById('cell1').className='winner'
        document.getElementById('cell2').className='winner'
        document.getElementById('cell3').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[4]&&player==values[5]&&player==values[6]){
        setResult(player+" is winner")
        document.getElementById('cell4').className='winner'
        document.getElementById('cell5').className='winner'
        document.getElementById('cell6').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[7]&&player==values[8]&&player==values[9]){
        setResult(player+" is winner")
        document.getElementById('cell7').className='winner'
        document.getElementById('cell8').className='winner'
        document.getElementById('cell9').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[3]&&player==values[6]&&player==values[9]){
        setResult(player+" is winner")
        document.getElementById('cell3').className='winner'
        document.getElementById('cell6').className='winner'
        document.getElementById('cell9').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[1]&&player==values[4]&&player==values[7]){
        setResult(player+" is winner")
        document.getElementById('cell1').className='winner'
        document.getElementById('cell4').className='winner'
        document.getElementById('cell7').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[2]&&player==values[5]&&player==values[8]){
        setResult(player+" is winner")
        document.getElementById('cell2').className='winner'
        document.getElementById('cell5').className='winner'
        document.getElementById('cell8').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[1]&&player==values[5]&&player==values[9]){
        setResult(player+" is winner")
        document.getElementById('cell1').className='winner'
        document.getElementById('cell5').className='winner'
        document.getElementById('cell9').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(player==values[3]&&player==values[5]&&player==values[7]){
        setResult(player+" is winner")
        document.getElementById('cell3').className='winner'
        document.getElementById('cell5').className='winner'
        document.getElementById('cell7').className='winner'
        setgame(false)
        jsConfetti.addConfetti();
    }
    else if(count>=8){
        console.log("game drawn")
        setResult("Game drawn")
        document.getElementByClassName('cell').className='drawn'
        
    }
  
}




    const clickhandle=(cell)=>{
        if(game){
            document.getElementById(cell).innerHTML=player
            setcount(count+1)
            console.log(count)
           
            disbaleclick(cell)
            checkwinner()
            if(player=='O'){
                setPlayer('X')
            }
            else{
                setPlayer('O')
            }
        }
    }
  
    return(
        <>
        <div className="parent">
       <h1 id="heading">Tic-Tac-toe</h1>
       <div className='container'>
        <div className="cell" id="cell1" onClick={()=>{clickhandle('cell1')}}></div>
        <div className="cell" id="cell2" onClick={()=>{clickhandle('cell2')}}></div>
        <div className="cell" id="cell3" onClick={()=>{clickhandle('cell3')}}></div>
        <div className="cell" id="cell4" onClick={()=>{clickhandle('cell4')}}></div>
        <div className="cell" id="cell5" onClick={()=>{clickhandle('cell5')}}></div>
        <div className="cell" id="cell6" onClick={()=>{clickhandle('cell6')}}></div>
        <div className="cell" id="cell7" onClick={()=>{clickhandle('cell7')}}></div>
        <div className="cell" id="cell8" onClick={()=>{clickhandle('cell8')}}></div>
        <div className="cell" id="cell9" onClick={()=>{clickhandle('cell9')}}></div>


       </div>

       <p id='result'>{result}</p>
       <button id="button" onClick={()=>{window.location='/'}}>Reset</button>





        </div>
        
        
        
        </>
    )

}
export default App