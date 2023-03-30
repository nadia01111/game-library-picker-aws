import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";

import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import HomePage from "./Components/AllGamesPage";
import RandomGame from "./Components/RandomGame";
import Import from "./Components/Import";
import styled from "styled-components";
import Page from "./Components/WelcomePage";
import GameID from "./Components/GameID";

function App() {
  

  return (
    <BrowserRouter>
      <Header />
  <Wrapper>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/all" element={<HomePage/>}/>
        <Route path="/random" element={<RandomGame/>}/>
        <Route path="/import" element={<Import/>}/>
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
