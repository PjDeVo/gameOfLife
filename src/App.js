import produce from "immer";
import React, { useRef, useState, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
import Rules from "./components/Rules";

import Board from "./grid/board";

// function toggleRunning() {

// }

const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0],
];

function App() {
  const [numRows, setRows] = useState(30);
  const [numCols, setCols] = useState(40);
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState(50);

  return (
    <body>
      <div className="App">
        <div className="wrapper">
          <Header />
        </div>

        <div className="content-wrapper">
          <div>
          <Board
            time={timer}
            running={running}
            operations={operations}
            rows={numRows}
            cols={numCols}
            changeRows = {setRows}
            changeCols = {setCols}
            setTime = {setTimer}
          />
          </div>
          
          <div>
            <Rules/>
          </div>
          
        </div>
      </div>
    </body>
  );
}

export default App;
