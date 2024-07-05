import { useEffect, useRef, useState } from 'react';
import './App.css';
import { core } from "game";

const colors = [
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
  "burlywood",
  "mediumslateblue"
];

function App() {
  const gameRef = useRef(new core.Game());
  const [numbers, setNumbers] = useState<number[]>([])
  const [number, setNumber] = useState<number | undefined>(undefined);

  console.log(core.shuffle(12));

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
      readPieces();
    }
  }

  useEffect(() => {
    readPieces();
  }, []);

  return (
    <>
      <span style={{color: "black"}}>{game().correctPiecesCount()}</span>
      <div className="grid">
        {numbers.map((v, index) => (
          <div key={index} className='grid-item' style={{ backgroundColor: colors[v] }} onClick={() => selectNumber(index)} />
        ))}
      </div>
    </>
  )
}

export default App
