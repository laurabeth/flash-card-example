import React from "react";
import stack from "../stationery-stack-white.svg";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={stack} className="App-logo" alt="logo" />
        <h1>flash card maker r1</h1>
      </header>
    </div>
  );
};

export default Home;
