import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [box0,setBox0]=useState("");
  const [box1,setBox1]=useState("");
  const [box2,setBox2]=useState("");
  const [box3,setBox3]=useState("");
  const [box4,setBox4]=useState("");
  const [box5,setBox5]=useState("");
  const [box6,setBox6]=useState("");
  const [box7,setBox7]=useState("");
  const [box8,setBox8]=useState("");
 
 
  const [player,setPlayer]=useState("X");
  const [result,setResult]=useState("");
  const setSquare = ()=>{
    if(player==="X"){
      setPlayer("O");
    }
    else{
      setPlayer("X");
    }
  }


  
  const checkWinner = ()=>{
    if(box0===box1 && box1===box2){
      return box0;
    }
    else if(box3===box4 && box4===box5){
      return box3;
    }
    else if(box6===box7 && box7===box8){
      return box6;
    }
    else if(box0===box3 && box3===box6){
      return box0;
    }
    else if(box1===box4 && box4===box7){
      return box1;
    }
    else if(box2===box5 && box5===box8){
      return box2;
    }
    else if(box0===box4 && box4===box8){
      return box0;
    }
    else if(box2===box4 && box4===box6){
      return box2;
    }
    else if(box0!=="" && box1!=="" && box2!=="" && box3!=="" && box4!=="" && box5!=="" && box6!=="" && box7!=="" && box8!==""){
      return "Draw";
    }
    else{
      return "No";
    }
  } 


const announceWinner = ()=>{
  if(result==="Draw"){
    alert("Draw!");
  }
  else if(result!==""){
    alert("Winner : Player "+result);
  }
  
}


 useEffect(()=>{
  let str = checkWinner();
    if(str!=="No"){
      setResult(str);
    }
    else{
      setResult("");
    }

    announceWinner();
   
 })







  return (
    <div className="App">
      <div className="header">
        <h1>Tic Tac Toe</h1>
      </div>

      <div className="board">
        <div className="row">

           <div className="square-box" onClick={()=>{
            if(box0===""){
              setBox0(player);
              setSquare();
            }
           
           }}>
             {box0}
           </div>
           <div className="square-box" onClick={()=>{
            if(box1===""){
              setBox1(player);
              setSquare();
            }
  
            
           }}>
           {box1}
           </div>
           <div className="square-box" onClick={()=>{
            if(box2===""){
              setBox2(player);
              
              setSquare();
            }
           
           }}>
           {box2}
           </div>
        </div>
        <div className="row">

           <div className="square-box" onClick={()=>{
             if(box3===""){
              setBox3(player);
              
              setSquare();
            }
            
           }}>
           {box3}
           </div>
           <div className="square-box" onClick={()=>{
             if(box4===""){
              setBox4(player);
             
              setSquare();
            }
             
           }}>
           {box4}
           </div>
           <div className="square-box" onClick={()=>{
             if(box5===""){
              setBox5(player);
             
              setSquare();
            }
             
           }}>
           {box5}
           </div>

        </div>


        <div className="row">
           <div className="square-box" onClick={()=>{
              if(box6===""){
                setBox6(player);
                
                setSquare();
              }
             
           }}>
           {box6}
           </div>
           <div className="square-box" onClick={()=>{
             if(box7===""){
              setBox7(player);
             
              setSquare();
            }
            
           }}>
           {box7}
           </div>
           <div className="square-box" onClick={()=>{
             if(box8===""){
              setBox8(player);
             
              setSquare();
            }
            
           }}>
           {box8}
           </div>
        </div>

        
      </div>


      <button onClick={()=>{
          setBox0("");
          setBox1("");
          setBox2("");
          setBox3("");
          setBox4("");
          setBox5("");
          setBox6("");
          setBox7("");
          setBox8("");

          
          setResult("");
          setPlayer("X");
        }}>Reset</button>
    </div>
  );
}

export default App;
