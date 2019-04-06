import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Registration } from './Registration';
import { Game } from './Game';
import { gameStatus } from './gameService';

function App() {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [board, setBoard] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]);
  const [currentPlayer, setCurrentPlayer] = useState(player1);
  const [winner, setWinner] = useState(null);

  const handleNewGame = (player1, player2) => {
    setPlayer1(player1);
    setPlayer2(player2);
    setCurrentPlayer(player1);
  };
  const handleCellClicked = (rowIndex, colIndex) => {
    const character = currentPlayer === player1 ? 'X' : 'Y';
    const _board = board.map(row => [...row]);
    _board[rowIndex][colIndex] = character;
    if (gameStatus(_board, character)) setWinner(currentPlayer);
    else setCurrentPlayer(currentPlayer === player1 ? player2 : player1);
    setBoard(_board);
  };

  return (
    <div className="App">
      <Registration onNewGame={handleNewGame} />
      <Game
        player1={player1}
        player2={player2}
        board={board}
        onCellClicked={handleCellClicked}
      />
      {winner && <div data-testid="winner-message">{winner} won!</div>}
    </div>
  );
}

export default App;
