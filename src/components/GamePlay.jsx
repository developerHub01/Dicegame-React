import styled from "styled-components";
import { useState } from "react";

import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { OutlinedBtn, Button } from "./Style/Button";
import ShowRules from "./ShowRules";

const GamePlay = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState(null);
  const [showRules, setShowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    const randomeNum = Math.round(Math.random() * (max - min) + min);
    return randomeNum;
  };

  const roleDice = () => {
    if (!selectedNumber) {
        setError(prev => "You have not selected any number");
      return;
    }
    const randomDice = generateRandomNumber(1, 6);
    setCurrentDice((prev) => randomDice);

    if (selectedNumber === randomDice) {
      setTotalScore((prev) => prev + randomDice);
    } else {
      setTotalScore((prev) => prev - 2);
    }

    setSelectedNumber((prev) => undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore totalScore={totalScore} setTotalScore={setTotalScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <OutlinedBtn onClick={()=>{
            setTotalScore(prev => 0)
        }}
            className="outlineBtn"
        >Reset Score</OutlinedBtn>
        <Button
          onClick={()=>setShowRules(prev => !prev)}
        >Show Rules</Button>
      </div>

      {showRules && <ShowRules/>}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding: 20px 0;
  width: 90%;
  max-width: 1180px;
  margin: 0 auto;

  .top_section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    gap: 15px;
  }

  .btns{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
  }
`;
