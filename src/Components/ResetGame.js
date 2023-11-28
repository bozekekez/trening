const resetGame = (setFieldOpen, setGameResult) => {
  setFieldOpen(new Array(9).fill({
    field: 'open',
    player: ''
  }))
  setGameResult('')
}

export default resetGame