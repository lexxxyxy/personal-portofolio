import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Game from './components/game';
import Contact from "./components/Contact";
import React from "react";

function App() {
  return (
    <div id="home" className="font-sans">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Game />
      <Contact />
    </div>
  );
}

export default App;
