
const checkResult = (fieldOpen, setGameResult, activePlayer) => {
  const winningCombinations = [[0, 1, 2], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [6, 5, 2]]

  const isDraw = fieldOpen.every(el => el.player)
  if (isDraw) {
    setGameResult('Draw')
    return
  }

  const haveWinner = winningCombinations.find(combination => 
    fieldOpen.filter((el, i) => el.player === activePlayer && combination.includes(i)).length === 3)

  if(haveWinner) {
    setGameResult(activePlayer === 'PlayerOne' ? 'Player One Victory' : 'Player Two Vicroty')
    return
  }  
   
}

export default checkResult