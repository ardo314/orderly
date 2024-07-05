import { useRef, useState } from 'react';
import './App.css';
import { core } from "game";

const PIECE_COUNT = 12;
const COLORS = [
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
const colors = Array.from(core.shuffledList(PIECE_COUNT)).map((i) => COLORS[i]);

type State = {
  pieces: number[];
  tries: number;
  correctPiecesCount: number;
};

function App() {
  const gameRef = useRef(new core.Game(PIECE_COUNT));
  const [state, setState] = useState<State>(getState());
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  function game() {
    return gameRef.current;
  }

  function getState(): State {
    return {
      pieces: Array.from(game().pieces()),
      tries: game().tries(),
      correctPiecesCount: game().correctPiecesCount()
    };
  }

  function selectIndex(index: number) {
    if (selectedIndex === undefined) {
      setSelectedIndex(index);
    }
    else if (selectedIndex !== index) {
      game().play(selectedIndex, index);
      setState(getState());
      setSelectedIndex(undefined);
    }
  }

  return (
    <>
      <span style={{color: "black"}}>{game().correctPiecesCount()}</span>
      <div className="grid">
        {state.pieces.map((piece, index) => (
          <div key={index} className='grid-item' style={{ backgroundColor: colors[piece] }} onClick={() => selectIndex(index)} />
        ))}
      </div>
    </>
  )
}

export default App
