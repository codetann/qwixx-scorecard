import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Provider";

export default function PenaltyButton({ id, toggled }) {
  const { game, update } = useContext(AppContext);

  const handleClick = () => {
    console.log("here");
    const tempObj = { ...game };
    const penalty = tempObj.penalty.penalties.find((item) => item.id === id);
    if (!toggled) {
      penalty.toggled = true;
      tempObj.penalty.total += 5;
      console.log(tempObj);
      update(tempObj);
    } else {
      penalty.toggled = false;
      tempObj.penalty.total -= 5;
      update(tempObj);
    }
  };
  return (
    <Container
      onClick={handleClick}
      style={{ background: toggled ? "rgba(26, 26, 26, 0.849)" : "none" }}
    ></Container>
  );
}

const Container = styled.div`
  width: 6rem;
  height: 3.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  margin: 0 0.5rem;

  @media (max-width: 770px) {
    width: 2rem;
  }
`;
