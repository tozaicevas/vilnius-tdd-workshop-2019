export function gameStatus(board, char) {
  return (
    board[0].every(cell => cell === char) ||
    checkDiagonal(board, char) ||
    checkVertical(board, char)
  );
}

const checkDiagonal = (board, char) => {
  return board[0][0] === char && board[1][1] === char && board[2][2] === char;
};

const checkVertical = (board, char) => {
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === char && board[1][i] === char && board[2][i] === char)
      return true;
  }
  return false;
};
