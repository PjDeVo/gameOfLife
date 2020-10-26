import React, { useState, useRef, useCallback } from "react";
import produce from "immer";

function Board(props) {

  
  const [time, setNewTime] = useState(0)

  const EmptyGrid = () => {
    const rows = [];
    for (let i = 0; i < props.rows; i++) {
      rows.push(Array.from(Array(props.cols), () => 0));
    }
    return rows;
  };

  //sets the current grid full of dead cells
  const [grid, setGrid] = useState(() => {
    return EmptyGrid();
  });

  const [running, setRunning] = useState(false);

  const runningRef = useRef(running);

  runningRef.current = running;

  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    //if not true, stop, otherwise...

    //produces a copy of the grid, checks to see the neighbors of the cell

    //if neighbors reaches the conditionals it hits the if else statements

    //operations defines the positions for the functionality to check, see in app.js

    setGrid((g) => {
      return produce(g, (gridCopy) => {
        for (let i = 0; i < props.rows; i++) {
          for (let k = 0; k < props.cols; k++) {
            let neighbors = 0;
            props.operations.forEach(([x, y]) => {
              const newI = i + x;
              const newK = k + y;
              if (
                newI >= 0 &&
                newI < props.rows &&
                newK >= 0 &&
                newK < props.cols
              ) {
                neighbors += g[newI][newK];
              }
            });

            if (neighbors < 2 || neighbors > 3) {
              gridCopy[i][k] = 0;
            } else if (g[i][k] === 0 && neighbors === 3) {
              gridCopy[i][k] = 1;
            }
          }
        }
      });
    });
    //timing for the new grid to populate
    setTimeout(runSimulation, props.time);
  }, []);

  console.log(props.time)

  const handleChange = (e) => {
    e.preventDefault();
    setNewTime(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    props.setTime(time)
    console.log(props)
    
  }

  return (
    
    <div>
      <button
        onClick={() => {
          setRunning(!running);
          if (!running) {
            runningRef.current = true;
            runSimulation();
          }
        }}
      >
        {running ? "stop" : "start"}
      </button>

      <button onClick={() => setGrid(EmptyGrid())}> Delete</button>

      <button
        onClick={() => {
          const rows = [];
          for (let i = 0; i < props.rows; i++) {
            rows.push(
              Array.from(Array(props.cols), () => (Math.random() > 0.5 ? 1 : 0))
            );
          }
          setGrid(rows);
        }}
      >
        {" "}
        Randomize
      </button>

      <form onSubmit = {handleSubmit}>
        <input  type="number" value={time} onChange = {handleChange} />
        <button  type="submit"> Change Speed </button>
      </form>

      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${props.cols}, 20px)` }}
      >
        {grid.map((rows, i) =>
          rows.map((col, j) => (
            <div
              key={`${i}-${j}`}
              onClick={() => {
                const newGrid = produce(grid, (gridCopy) => {
                  gridCopy[i][j] = grid[i][j] ? 0 : 1;
                });
                setGrid(newGrid);
              }}
              //change the grid at the point of click from alive to dead or vice versa
              style={{
                width: 20,
                height: 20,
                backgroundColor: grid[i][j] ? "blue" : undefined,
                border: "solid 1px black",
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Board;
