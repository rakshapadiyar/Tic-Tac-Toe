import { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import Message from './components/Message';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);
  const [gridsFilled, setGridsFilled] = useState(1);
  const [draw, setDraw] = useState(false);
  const handleSquareClick = clickedPosition => {
    if (winner) {
      return;
    }

    if (gridsFilled == 9) {
      if (winner == null) {
        setDraw(true);
      }
    }
    setSquares(currentBoardState => {
      return currentBoardState.map((currentSquareValue, position) => {
        if (position === clickedPosition && squares[position] == null) {
          setGridsFilled(gridsFilled + 1);
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

  let winner = calculateWinner(squares);

  return (
    <div className="app">
      <Message isXNext={isXNext} winner={winner} draw={draw} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
