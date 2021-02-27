import React, { useContext } from "react";
import { AppContext } from "../context/Provider";
import styled from "styled-components";

export default function Number({
  number,
  color,
  toggled,
  count,
  unlocked,
  getColor,
}) {
  const { game, update } = useContext(AppContext);

  const checkLock = () => {
    if (count < 10) return true;
    if (unlocked) return true;
    return false;
  };

  // This function runs when the user clicks a number
  // It takes the game object and duplicates it.
  // Finds the row and the number in that row and will update score and toggled of the number
  // Also check if the score is over 5. If so it will set unlock to true
  const handleClick = () => {
    if (!checkLock()) return;
    if (!toggled) {
      const tempObj = { ...game };
      const row = tempObj.rows.find((item) => item.color === color);
      const num = row.numbers.find((item) => item.number === number);
      row.score++;
      if (row.score >= 5) {
        row.unlocked = true;
      } else {
        row.unlocked = false;
      }
      num.toggled = true;
      if (count === 10 && num.toggled === true) {
      }
      update(tempObj);
    } else {
      const tempObj = { ...game };
      const row = tempObj.rows.find((item) => item.color === color);
      const num = row.numbers.find((item) => item.number === number);
      row.score--;
      if (row.score >= 5) {
        row.unlocked = true;
      } else {
        row.unlocked = false;
      }
      num.toggled = false;
      update(tempObj);
    }
    console.log(count);
  };

  return (
    <>
      {number === 0 && (
        <Icon
          onClick={handleClick}
          style={{
            borderRadius: "50%",
            color: getColor(),
            opacity: checkLock() ? "1" : ".5",
            background: toggled
              ? "rgba(26, 26, 26, 0.849)"
              : "rgba(255, 255, 255, 0.849)",
          }}
          className={`fas fa-${unlocked ? "lock" : "unlock"}`}
        ></Icon>
      )}
      {number !== 0 && (
        <Container
          onClick={handleClick}
          style={{
            color: getColor(),
            opacity: checkLock() ? "1" : ".5",
            background: toggled
              ? "rgba(26, 26, 26, 0.849)"
              : "rgba(255, 255, 255, 0.849)",
          }}
        >
          {number}
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-weight: bold;
  font-size: 24px;
`;

const Icon = styled.i`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  font-size: 24px;
`;
