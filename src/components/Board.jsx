import React, { useState } from 'react';
import Square from './Square';
import Message from './Message';

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

  const renderNextPlayer = () => {
    if (isXNext) return <Message player={'X'} />;
    else return <Message player={'O'} />;
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
      {/* {renderNextPlayer()} */}
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
