import checkResault from './CheckResult'

const playTurn = (activePlayer, setActivePlayer, fieldOpen, setFieldOpen, key, gameResult, setGameResult) => {
  if (gameResult) return
  if (fieldOpen[key].field === 'filled') return
  fieldOpen[key] = {
    field: 'filled',
    player: activePlayer
  }
  setFieldOpen(fieldOpen)
  checkResault(fieldOpen, setGameResult, activePlayer)
  setActivePlayer(activePlayer === 'PlayerOne' ? 'PlayerTwo' : 'PlayerOne')
}

export default playTurn