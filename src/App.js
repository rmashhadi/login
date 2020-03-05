import React, { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Route } from "react-router-dom";
import Page2 from "./components/Page2";

function App() {
  return (
    <>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/page" component={Page2} />
    </>
  );
}

export default App;
