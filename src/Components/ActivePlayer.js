import { ItemContext } from './Context'
import { useContext } from 'react'
import resetGame from './ResetGame'

const PlayGrid = () => {

  const { activePlayer, gameResult, setGameResult, setFieldOpen } = useContext(ItemContext)

  return (
    <div className='ActivePlayer'>
      {gameResult ? 
      <div className='display'><p>{gameResult}</p><button onClick={() => resetGame(setFieldOpen, setGameResult)}>Reset Game</button></div> : 
      <div className='display'><p>{activePlayer}</p></div>}
    </div>
  )
}

export default PlayGrid