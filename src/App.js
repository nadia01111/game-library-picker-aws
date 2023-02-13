import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";

// import GlobalStyles from "./GlobalStyles";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";


function App() {
  return (
  <BrowserRouter>
   {/* <GlobalStyles/> */}
      <Header />
      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
