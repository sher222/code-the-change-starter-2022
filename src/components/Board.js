import React from "react";
import Square from "./Square";
const Board = ({squares, onClick}) => {
    console.log("board value ", squares)
    const items = squares.map(function(item, index){
        return <Square value={item} onClick={() => {onClick(index)}} key={index}/>;
    });
  return (
      // TODO: Populate the board with squares
      <div className="board">
          {items}
      </div>
  );
};



export default Board;
