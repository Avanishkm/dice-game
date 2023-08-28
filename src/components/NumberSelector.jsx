import { useState } from "react";
import styled from "styled-components";
const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setSelectedNumber(value);
    setError("")
  }
  

 

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelecetd={value == selectedNumber}
            key={i}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </Box>
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
  align-items: end;
  .flex{
    display: flex;
    gap: 24px;

  }
  p{
    font-size: 24px;
    font-weight: 700px;
  }

  .error{
    color: red;
  }
`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 24px;
  background-color: ${(props) => (props.isSelecetd ? "black" : "white")};
  color: ${(props) => (!props.isSelecetd ? "black" : "white")};
`;
