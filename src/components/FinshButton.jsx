import React, { useContext, useState, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../context/Provider";

export default function FinishButton() {
  const { setEnd, restart, end } = useContext(AppContext);
  const [toggled, setToggled] = useState(false);
  const node = useRef(null);

  const handleClick = () => {
    setToggled((prevState) => !prevState);
  };

  const handleNo = () => {
    setToggled(false);
  };

  const handleYes = () => {
    setToggled(false);
    setEnd(true);
  };

  const handleReset = () => {
    restart();
  };

  // TODO: add ability to click off popup to make it go away

  return (
    <>
      {end && <Container onClick={handleReset}>Reset Game</Container>}
      {!end && <Container onClick={handleClick}>Finish Game</Container>}

      {toggled && (
        <Background>
          <PopUp ref={node}>
            <h2>Are you sure?</h2>
            <Buttons>
              <No onClick={handleNo}>No</No>
              <Yes onClick={handleYes}>Yes</Yes>
            </Buttons>
          </PopUp>
        </Background>
      )}
    </>
  );
}

const Container = styled.div`
  width: 10rem;
  height: 3.5rem;
  border: 1px solid #397eff;
  background: #397eff;
  color: white;
  border-radius: 0.5rem;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopUp = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;
const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(26, 26, 26, 0.849);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// buttons
const Buttons = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Yes = styled.div`
  padding: 1rem 3rem;
  background: #397eff;
  color: white;
  border-radius: 0.5rem;
`;
const No = styled.div`
  padding: 1rem 3rem;
  background: none;
  color: #397eff;
  border-radius: 0.5rem;
`;
