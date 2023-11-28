import playTurn from './PlayTurn'
import { ItemContext } from './Context'
import { useContext } from 'react'

const PlayGrid = () => {

  const { activePlayer, setActivePlayer, fieldOpen, setFieldOpen, gameResult, setGameResult } = useContext(ItemContext)
  const fields = []

  for (let i = 0; i < 9; i++) {
    fields.push(<div key={i} className={`field `} onClick={() => playTurn(activePlayer, setActivePlayer, fieldOpen, setFieldOpen, i, gameResult, setGameResult)}>
      {fieldOpen[i].field === 'open' ? '' : fieldOpen[i].player === 'PlayerOne' ? 'X' : 'O'}
    </div>)
  }

  return (
    <div className="playGrid">
      {fields}
    </div>
  )
}

export default PlayGrid