import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage";
import Navigation from "./components/layout/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <HomePage />
    </>
  );
}

export default App;
