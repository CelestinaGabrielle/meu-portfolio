import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Projects.module.css";
import imgTestProjects from "../../assets/images/img-test-projects.jpg";

interface Project {
  title: string;
  description: string;
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: "Gerenciamento de Tickets",
    description:
      "Sistema de gerenciamento de tickets para suporte técnico, com painel de controle intuitivo e integração em tempo real.",
    link: "https://github.com/CelestinaGabrielle/Gerenciamento_Tickets",
    image: imgTestProjects,
  },
  {
    title: "Blog-Next",
    description:
      "Blog moderno desenvolvido com Next.js, otimizado para SEO e com carregamento ultrarrápido de páginas.",
    link: "https://github.com/CelestinaGabrielle/Blog-Next",
    image: imgTestProjects,
  },
  {
    title: "Discord com Responsividade",
    description:
      "Clone da interface do Discord com design responsivo, funcionalidades de chat e integração de temas claros e escuros.",
    link: "https://github.com/CelestinaGabrielle/DiscordResponsividade",
    image: imgTestProjects,
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projects}>
      <h2 className="animate">Projetos</h2>
      <div className={styles.projectsList}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className={`${styles.projectCard} ${inView ? styles.animate : ""}`}
    >
      {project.image && (
        <div className={styles.imageContainer}>
          <img
            src={project.image}
            alt={project.title}
            className={styles.image}
          />
        </div>
      )}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </a>
    </div>
  );
};

export default Projects;
