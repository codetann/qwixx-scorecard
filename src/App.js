import React, { useContext } from "react";
import { AppContext } from "./context/Provider";
import styled from "styled-components";
import Row from "./components/Row";
import Penalty from "./components/Penalty";

function App() {
  const { game } = useContext(AppContext);

  return (
    <Container>
      {game.rows.map((row) => (
        <Row
          key={row.color}
          color={row.color}
          numbers={row.numbers}
          unlocked={row.unlocked}
        />
      ))}
      <Penalty />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export default App;

// TODO LIST
// // TODO: add ability to keep colors toggled during refresh. Add in localstorage
// // TODO: add penalties to the game board
// // TODO: add lock button and disabled feature
// // TODO: add styling to rows
// TODO: add responsive design to the board
// TODO: add feature to cross out numbers behind the selected one.
// // TODO: add score totals
// // TODO: add finish button (asks the user if you are sure you are finished.)
// // TODO: incorperate the reset game function from the provider.

//! BUGS
//! ISSUE #1: when the game resets it will keep one number highlighted. Not sure why. Need to fix
