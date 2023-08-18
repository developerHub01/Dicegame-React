import styled from "styled-components";

const NumberSelector = ({error, setError, selectedNumber, setSelectedNumber}) => {
  const numberList = [1, 2, 3, 4, 5, 6];
  return (
    <NumberSelectorContainer>
        <p className="error">{error}</p>
      <div>
        {numberList.map((number, i) => (
          <Box
            key={i}
            onClick={() => {
                setSelectedNumber(prev => number);
                setError(prev => "");
            }}
            className={selectedNumber === number && "checked"}
          >
            {number}
          </Box>
          // <Box key={i} onClick={()=>setSelectedNumber(number)} isSelected={selectedNumber===number}>{number}</Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: flex-end;

    .error{
        color: red;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        flex-wrap: wrap;
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
`;

const Box = styled.div`
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border: 2px solid #000;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &.checked {
    background: #000;
    color: #fff;
  }
  /* background: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")}; */

  /* background: ${(props) => {
    return props.isSelected ? "#000" : "#fff";
  }};
  color: ${(props) => {
    return props.isSelected ? "#fff" : "#000";
  }}; */
`;
