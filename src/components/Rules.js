import React from "react";

function Rules() {
  return (
    <div>
      <div>
        <h1>Conway's Rules</h1>

        <ol>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>

          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>

          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ol>
      </div>

      <div>
        <h1> Cellular Automata</h1>
        <h2>
          A collection of cells on a grid each of which are in a state typically
          dead or alive. Upon complying to a certain pattern of rules the state
          of the grid changes based on the rules.{" "}
        </h2>
      </div>

      <div>
        <h1> Turing Completeness</h1>
        <h2>
          Taking Conway's glider representation of The Game of Life into
          example, the game runs on an infinite loop based on a set of rules
          that are preconstructed in the algorithm.
          Turing completeness is the ability of a system of instructions to do such acts as a Turing Machine.
        </h2>
      </div>
    </div>
  );
}

export default Rules;
