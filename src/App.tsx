import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import About from "./components/AboutMe";

const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Banner />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </BrowserRouter>
    </div>
  );
};

export default App;
