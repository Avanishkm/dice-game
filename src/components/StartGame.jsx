import styled from "styled-components";
import { Button } from "../styled/button";

const StartGame = ({toggle}) => { // toggle as a props
  return (
    <>
      <Container>
        <div>
          <img src="/images/dices.png" alt="dice image" />
        </div>

        <div className="content">
          <h1>Dice Game</h1>
          <Button onClick={toggle}>play Now</Button>
        </div>
      </Container>
    </>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;


