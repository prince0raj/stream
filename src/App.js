import React from "react";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Detail from "./Component/Detail";
import Loginpage from "./Component/Loginpage";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </>
  );
}

export default App;
