import React from "react";
import styled from "styled-components";
import Number from "./Number";

export default function Row({ color, numbers, unlocked }) {
  const getColor = () => {
    if (color === "red") return "#FD405D";
    if (color === "yellow") return "#FBD400";
    if (color === "green") return "#05AF6F";
    if (color === "blue") return "#326AD8";
  };
  return (
    <Container style={{ background: getColor() }}>
      {numbers.map((num, i) => (
        <Number
          key={num.number}
          number={num.number}
          toggled={num.toggled}
          color={color}
          unlocked={unlocked}
          getColor={getColor}
          count={i}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 770px) {
  }
`;
