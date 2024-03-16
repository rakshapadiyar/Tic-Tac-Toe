import React from 'react';

const Message = ({ isXNext, winner, squares }) => {
  const draw = squares.every(squareValue => squareValue !== null);
  const nextPlayer = isXNext ? 'X' : 'O';
  const color = nextPlayer == 'X' ? 'text-green' : 'text-orange';
  const renderMessage = () => {
    if (winner) {
      return (
        <React.Fragment>
          <h1>
            Winner is <span className={color}>{winner}</span> !!!
          </h1>
        </React.Fragment>
      );
    } else if (draw == true) {
      return (
        <React.Fragment>
          <h1>
            <span className="text-orange">X </span> and
            <span className="text-green"> O </span> tied.
          </h1>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <h1>
            Next player is <span className={color}>{nextPlayer}</span>
          </h1>
        </React.Fragment>
      );
    }
  };

  return (
    <React.Fragment className="status-message">
      {renderMessage()}
    </React.Fragment>
  );
};

export default Message;
