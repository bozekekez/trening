import { ItemContext } from "./Context"
import { useContext } from "react"

const PlayGrid = () => {

  const { activePlayer, gameResult } = useContext(ItemContext)

  return (
    <div className="ActivePlayer">
      {gameResult ? gameResult : activePlayer}
    </div>
  )
}

export default PlayGrid