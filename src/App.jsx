import { useState } from 'react';
import Board from './components/Board';
import './styles/root.scss';
import Message from './components/Message';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setisXNext] = useState(true);

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
    <div className="app">
      <Message isXNext={isXNext} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
