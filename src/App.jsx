import styled from "styled-components";
import {useState} from 'react'


import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>
      {
        isGameStarted ? <GamePlay /> : <StartGame 
        toggle={toggleGamePlay} 
        />
      }
    </>
  );
};

export default App;
