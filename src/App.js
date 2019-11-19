import React, { useState,useEffect }from 'react';
import './App.css';

function App() {
  const [click, setClick] = useState();
  function toClick(id)  {
    return setClick(id);
   }
  return (
    <div className="App">
      <header className="Body">
          <Yeah number={"First Button"} function={toClick}/>
          <Yeah number={"Second Button"}function={toClick}/>
          <Yeah number={"Third Button"} function={toClick}/>
      
          <p>You've selected: {click}</p>
        </header>
      </div>
    );

}


function Yeah(props) {
  // Declare a new state variable, which we'll call "count"
   function handleClick(){
    props.function(props.number);
   }

    return (
    <div>
      <button className="mybutton" onClick={handleClick}>{props.number} </button>
    
    </div>
  );

    }





export default App;
