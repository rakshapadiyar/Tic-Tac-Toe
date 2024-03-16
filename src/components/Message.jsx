import React from 'react';

const Message = ({ isXNext }) => {
  let player = isXNext ? 'X' : 'O';

  return (
    <div>
      <h1>Next Player is {player}</h1>
    </div>
  );
};

export default Message;
