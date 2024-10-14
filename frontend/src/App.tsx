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

type State = {
  pieces: number[];
  tries: number;
  correctPiecesCount: number;
  isOver: boolean;
};

const colors = Array.from(core.shuffledList(PIECE_COUNT)).map((i) => COLORS[i]);

function App() {
  const gameRef = useRef(new core.Game(PIECE_COUNT));
  const [state, setState] = useState<State>(getState());
  const [selectedIndex, setSelectedIndex] = useState<number | undefined>(undefined);

  function getState(): State {
    const game = gameRef.current;

    return {
      pieces: Array.from(game.pieces()),
      tries: game.tries(),
      correctPiecesCount: game.correctPiecesCount(),
      isOver: game.isOver(),
    };
  }

  function selectIndex(index: number) {
    if (selectedIndex === undefined) {
      setSelectedIndex(index);
    }
    else if (selectedIndex !== index) {
      gameRef.current.play(selectedIndex, index);
      setState(getState());
      setSelectedIndex(undefined);
    }
  }

  return (
    <>
      <span style={{ color: "black" }}>Tries: {state.tries} - Pieces in correct position: {state.correctPiecesCount}</span>
      {state.isOver && <span style={{ color: "black" }}>Game Over</span>}
      <div className="grid">
        {state.pieces.map((piece, index) => (
          <div key={index} className='grid-item' style={{ backgroundColor: colors[piece] }} onClick={() => selectIndex(index)} />
        ))}
      </div>
    </>
  )
}

export default App
