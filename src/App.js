import Main from './Components/Main';
import './App.css';
import React from 'react'
import { ItemContext } from './Components/Context';
import { useState } from 'react';

function App() {
  const[ activePlayer, setActivePlayer ] = useState('PlayerOne')
  const[ fieldOpen, setFieldOpen ] = useState(new Array(9).fill({
    field: 'open',
    player: ''
  }))
  const [ gameResult, setGameResult] = useState()
  return (
    <ItemContext.Provider value={{activePlayer, setActivePlayer, fieldOpen, setFieldOpen, gameResult, setGameResult}}>
      <Main />
    </ItemContext.Provider>
  );
}

export default App;
