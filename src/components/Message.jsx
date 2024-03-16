import React from 'react';

const Message = ({ isXNext, winner, draw }) => {
  let message;
  if (winner != null) {
    message = 'WINNER IS ' + winner + ' !!!!';
  } else if (draw == true) {
    message = 'GAME DRAW (:(';
  } else {
    let player = isXNext ? 'X' : 'O';
    message = 'Next Player is ' + player;
  }

  return (
    <div>
      <h1> {message}</h1>
    </div>
  );
};

export default Message;
