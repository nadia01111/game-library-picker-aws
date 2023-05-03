import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import React from "react";

import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import HomePage from "./Components/AllGamesPage";
import RandomGame from "./Components/RandomGame";
import Import from "./Components/Import";
import Import2 from "./Components/Import";
import styled from "styled-components";
import Page from "./Components/WelcomePage";
import GameID from "./Components/GameID";

function App() {
  const [randomGameKey, setRandomGameKey] = useState(0);

  const handleRandomGameClick = () => {
    setRandomGameKey(prevKey => prevKey + 1);
  }

  return (
    <BrowserRouter>
      <Header />
  <Wrapper>
      <SideBar onRandomGameClick={handleRandomGameClick}/>
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/all" element={<HomePage/>}/>
        <Route path="/random" element={<RandomGame key={randomGameKey}/>}/>
        <Route path="/import" element={<Import2/>}/>
        <Route path="/game/:gameId" element={<GameID />} />

      </Routes>
  </Wrapper>

  </BrowserRouter>
  );
  
}
const Wrapper = styled.div`
display:flex;
justify-content:flex-start;
align-items:flex-start;
gap:30px;

`;

export default App;
