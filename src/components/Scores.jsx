import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/Provider";
import styled from "styled-components";

export default function Scores() {
  const [scores, setScores] = useState([]);
  const { game } = useContext(AppContext);

  useEffect(() => {
    const arr = [];

    game.rows.forEach((item) => {
      switch (item.score) {
        case 1:
          arr.push(1);
          break;
        case 2:
          arr.push(3);
          break;
        case 3:
          arr.push(6);
          break;
        case 4:
          arr.push(10);
          break;
        case 5:
          arr.push(15);
          break;
        case 6:
          arr.push(21);
          break;
        case 7:
          arr.push(28);
          break;
        case 8:
          arr.push(36);
          break;
        case 9:
          arr.push(45);
          break;
        case 10:
          arr.push(55);
          break;
        case 11:
          arr.push(66);
          break;
        case 12:
          arr.push(78);
          break;
        default:
          arr.push(0);
          break;
      }
    });

    arr.push(game.penalty.total);

    arr.push(arr[0] + arr[1] + arr[2] + arr[3] - arr[4]);
    setScores(arr);
    // eslint-disable-next-line
  }, []);

  const getColor = (i) => {
    if (i === 0) return "#FD405D";
    if (i === 1) return "#FBD400";
    if (i === 2) return "#05AF6F";
    if (i === 3) return "#326AD8";
    if (i === 4) return "gray";
    if (i === 5) return "black";
  };

  return (
    <>
      {scores.length > 1 && (
        <Container>
          <Score style={{ border: `2px solid ${getColor(0)}` }}>
            {scores[0]}
          </Score>
          <p>+</p>
          <Score style={{ border: `2px solid ${getColor(1)}` }}>
            {scores[1]}
          </Score>
          <p>+</p>
          <Score style={{ border: `2px solid ${getColor(2)}` }}>
            {scores[2]}
          </Score>
          <p>+</p>
          <Score style={{ border: `2px solid ${getColor(3)}` }}>
            {scores[3]}
          </Score>
          <p>-</p>
          <Score style={{ border: `2px solid ${getColor(4)}` }}>
            {scores[4]}
          </Score>
          <p>=</p>
          <Score style={{ border: `2px solid ${getColor(5)}` }}>
            {scores[5]}
          </Score>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Score = styled.div`
  width: 5rem;
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
