export function gameStatus(board, char) {
  return board[0].every(cell => cell === char);
}
