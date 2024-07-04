import { useEffect, useRef, useState } from 'react'
import './App.css'
import { core } from "game"
import { shuffle } from './utils';

const colors = shuffle([
  "red",
  "green",
  "blue",
  "yellow",
  "cadetblue",
  "orange",
  "purple",
  "brown",
  "black",
  "grey",
]);

function App() {
  const gameRef = useRef(new core.Game());
  const [numbers, setNumbers] = useState<number[]>([])
  const [number, setNumber] = useState<number | undefined>(undefined);

  function game() {
    return gameRef.current;
  }

  function readPieces() {
    setNumbers(Array.from(game().pieces()));
  }

  function selectNumber(index: number) {
    if (number === undefined) {
      setNumber(index);
    }
    else if (number !== index) {
      game().play(number, index);
      setNumber(undefined);
      console.log(game().correctPiecesCount());
      readPieces();
    }
  }

  useEffect(() => {
    readPieces();
  }, []);

  return (
    <>
      <div className="grid">
        {numbers.map((v, index) => (
          <div key={index} className='grid-item' style={{ backgroundColor: colors[v] }} onClick={() => selectNumber(index)} />
        ))}
      </div>
    </>
  )
}

export default App
