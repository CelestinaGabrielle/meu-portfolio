import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header /> {/* Componente Header (se necessário) */}
      <About /> {/* Componente About */}
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
};

export default App;