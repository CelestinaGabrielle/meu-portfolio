import React from "react";
import "./Projects.css"

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Portfólio Pessoal",
    description: "Um portfólio desenvolvido com React e TypeScript.",
    link: "https://github.com/seu-usuario/portfolio",
  },
  {
    title: "App de Tarefas",
    description: "Um gerenciador de tarefas simples e funcional.",
    link: "https://github.com/seu-usuario/todo-app",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Ver Projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
