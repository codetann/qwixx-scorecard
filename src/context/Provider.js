import React, { createContext, useState } from "react";
import { Board } from "./data";
export const AppContext = createContext();

export default function Provider({ children }) {
  const [game, setGame] = useState(checkLocalStorage());
  const [end, setEnd] = useState(false);

  // This function is for the Provider only.
  // It checks if there is any data in localstorage. If there is, it returns it. If not it, creates it.
  function checkLocalStorage() {
    const data = JSON.parse(localStorage.getItem("quixx"));
    if (data) return data;
    if (!data) {
      localStorage.setItem("quixx", JSON.stringify(Board));
      return Board;
    }
  }

  // - Game Functions - //
  // Updates the game board object and sets it in localStorage and updates the state of the application
  function update(data) {
    localStorage.setItem("quixx", JSON.stringify(data));
    setGame(JSON.parse(localStorage.getItem("quixx")));
  }

  // will reset the game board if function is ran
  function restart() {
    localStorage.setItem("quixx", JSON.stringify(Board));
    setGame(Board);
    setEnd(false);
  }

  return (
    <AppContext.Provider value={{ game, update, restart, end, setEnd }}>
      {children}
    </AppContext.Provider>
  );
}
