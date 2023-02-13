import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";

// import GlobalStyles from "./GlobalStyles";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import RandomGame from "./Components/RandomGame";
import Import from "./Components/Import";
import CurrentGame from "./Components/CurrentGame";


function App() {
  return (
  <BrowserRouter>
   {/* <GlobalStyles/> */}
      <Header />
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/random" element={<RandomGame/>}/>
        <Route path="/import" element={<Import/>}/>
        <Route path="/:current" element={<CurrentGame/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
