import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber, divideNumber, MultiNumber } from "./action/index"
function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const myOtherState = useSelector((state) => state.multiDiv);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Using React and Redux</h1>
        <h1> 💥 Increment/Decrement counter</h1>
        <div>
          <a className="trigger" ><span onClick={() => dispatch(decNumber())}> ➖ </span></a>
          <input className="inputValue" type="text" name="" id="" value={myState} />
          <a className="trigger" ><span onClick={() => dispatch(incNumber(5))}> ➕ </span></a>
        </div>
        <h1> 💥 Multiple/Divide counter 〰</h1>
        <div>
          <a className="trigger" ><span onClick={() => dispatch(divideNumber(5))}> ➗ </span></a>
          <input className="inputValue" type="text" name="" id="" value={myOtherState} />
          <a className="trigger" ><span onClick={() => dispatch(MultiNumber(2))}>  ✖ </span></a>
        </div>
      </header>
    </div>
  )
}

export default App;
