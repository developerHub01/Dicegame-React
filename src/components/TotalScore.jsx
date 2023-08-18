import styled from 'styled-components'

const TotalScore = ({totalScore}) => {
  return (
    <ScoreContainer>
      <h1>{totalScore}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;


const ScoreContainer = styled.div`
    text-align: center;
    max-width: 200px;
    h1{
        font-size: 100px;
        font-weight: 800;
        line-height: 1;
    }
    p{
        font-size: 24px;
        font-weight: 500;
    }
`