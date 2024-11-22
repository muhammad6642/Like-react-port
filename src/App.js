import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import QuoteBox from "./components/QuoteBox";

function App() {
  return (
    <div className="App d-flex align-items-center justify-content-center vh-100 bg-dark text-white">
      <QuoteBox />
    </div>
  );
}

export default App;
