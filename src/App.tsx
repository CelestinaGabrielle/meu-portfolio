import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import About from "./components/AboutMe/About";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
