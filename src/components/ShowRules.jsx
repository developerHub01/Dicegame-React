import styled from 'styled-components'

const ShowRules = () => {
  return (
    <RulesSecion>
      <h3>How to play dice game</h3>
      <ul>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>after click on  dice  if selected number is equal to dice number you will get same point as dice </li>
        <li>if you get wrong guess then  2 point will be dedcuted </li>
      </ul>
    </RulesSecion>
  )
}

export default ShowRules

const RulesSecion = styled.div`
  background: #FBF1F1;
  color: #000;
  padding: 20px 40px;
  max-width: 750px;
  width: 100%;
  margin: 20px auto;

  h3{
    margin-bottom: 15px;
    font-size: 24px;
    font-weight: 700;
  }

  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`