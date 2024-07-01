import { useEffect, useRef, useState } from 'react'
import './App.css'
import { core } from "game"
import { shuffle } from './utils';

const colors = shuffle([
  "red",
  "green",
  "blue",
  "yellow",
  "azure",
  "orange",
  "purple",
  "brown",
  "black",
  "grey",
]);

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
      <div className="grid">
        {numbers.map((_, index) => (<div key={index} className='grid-item' style={{ backgroundColor: colors[index] }} />))}
      </div>
    </>
  )
}

export default App
