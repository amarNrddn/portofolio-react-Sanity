import { About, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import React from "react";
import './app.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </div>
  );
}

export default App;
