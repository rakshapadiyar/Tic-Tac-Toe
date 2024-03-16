import { useState } from 'react';
import Board from './components/Board';

import './styles/root.scss';
import Message from './components/Message';
function App() {
  return (
    <div className="app">
      
      <Board />
    </div>
  );
}

export default App;
