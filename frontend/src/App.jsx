// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Nav from "./components/Nav";
import Home from "./components/Home";
import Team from "./components/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/predict" element={<Home />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
