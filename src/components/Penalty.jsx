import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Provider";
import PenaltyButton from "./PenaltyButton";
import FinishButton from "./FinshButton";
import Scores from "./Scores";

export default function Penalty() {
  const { game, end } = useContext(AppContext);

  return (
    <Container>
      {end && <Scores />}
      {!end && (
        <>
          <h2>Penalties</h2>
          <Buttons>
            {game.penalty.penalties.map((item) => (
              <PenaltyButton
                key={item.id}
                id={item.id}
                toggled={item.toggled}
              />
            ))}
          </Buttons>
        </>
      )}

      <FinishButton />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1rem;
`;
