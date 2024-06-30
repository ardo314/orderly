import { useEffect, useRef, useState } from 'react'
import './App.css'
import { core } from "game"

function App() {
  const gameRef = useRef(new core.Game());
  const [numbers, setNumbers] = useState<number[]>([])
  
  function game() {
    return gameRef.current;
  }

  useEffect(() => {
    setNumbers(Array.from(game().pieces()));
  }, []);

  return (
    <>
      {numbers.map((number, index) => (<div key={index}>{number}</div>))}
    </>
  )
}

export default App
