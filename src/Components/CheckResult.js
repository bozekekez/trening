
const checkResult = (fieldOpen, setGameResult, activePlayer) => {
  const winningCombinations = [[0, 1, 2], [0, 4, 8], [1, 4, 7], [2, 5, 8], [3, 4, 5], [6, 7, 8], [6, 5, 2]]
  let result

  winningCombinations.forEach(combination => {
    if (result) return
    if (fieldOpen.filter((el, i) => el.player === activePlayer && combination.includes(i)).length === 3) {
      result = activePlayer === 'PlayerOne' ? 'Player One Victory' : 'Player Two Vicroty'
    }
  }
  )

  if (fieldOpen.every(el => el.player)) {
    result = 'Draw'
  }

  setGameResult(result)

}

export default checkResult