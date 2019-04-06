export function gameStatus(board, char) {
  return board[0].every(cell => cell === char) || checkDiagonal(board, char);
}

const checkDiagonal = (board, char) => {
  return board[0][0] === char && board[1][1] === char && board[2][2] === char;
};
