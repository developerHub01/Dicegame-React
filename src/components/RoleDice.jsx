import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`./images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  align-items: center;

  .dice {
    cursor: pointer;
    width: 100%;
    max-width: 300px;

    img{
        width: 100%;
    }
  }

  p {
    font-size: 24px;
  }
`;
