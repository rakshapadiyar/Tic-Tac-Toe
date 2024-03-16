import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);
  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  const handleSquareClick = clickedPosition => {
    setSquares(currentBoardState => {
      return currentBoardState.map((currentSquareValue, position) => {
        if (position === clickedPosition && squares[position] == null) {
          if (isXNext) {
            setisXNext(false);
            return 'X';
          } else {
            setisXNext(true);
            return 'O';
          }
        }
        return currentSquareValue;
      });
    });
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        <Square
          value={squares[8]}
          onClick={() => {
            handleSquareClick(8);
          }}
        />
      </div>
    </div>
  );
};

export default Board;
