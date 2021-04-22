import React from "react";
import { hot } from "react-hot-loader";

import "../styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1>Hello, React!</h1>
    </div>
  );
};

export default hot(module)(App);
