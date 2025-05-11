import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Projects.module.css";

// Importa todas as imagens da pasta assets/images
const images = import.meta.glob(
  "../../assets/images/*.{jpg,png}"
) as Record<string, () => Promise<{ default: string }>>;

interface Project {
  title: string;
  description: string;
  link: string;
  imageName: string; // Nome da imagem correspondente
}

const projects: Project[] = [
  {
    title: "Task-manager",
    description:
      "Aplicação moderna para organizar e acompanhar suas tarefas de forma prática e eficiente.",
    link: "https://github.com/CelestinaGabrielle/task-manager",
    imageName: "Task.png",
  },
  {
    title: "Discord com Responsividade",
    description:
      "Clone da interface do Discord com design responsivo, funcionalidades de chat e integração de temas claros e escuros.",
    link: "https://github.com/CelestinaGabrielle/DiscordResponsividade",
    imageName: "Discord.png",
  },
    {
    title: "CRUD de usuários",
    description:
      "Aplicação CRUD desenvolvida com React para cadastrar, visualizar, editar e excluir dados de forma dinâmica e eficiente",
    link: "https://github.com/CelestinaGabrielle/CRUD",
    imageName: "crud.png",
  },
];

const Projects: React.FC = () => {
  return (
    <section className={styles.projects} id="projects">
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

  // Carrega a imagem correspondente ao projeto
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);

  React.useEffect(() => {
    const loadImage = async () => {
      const imagePath = `../../assets/images/${project.imageName}`;
      if (images[imagePath]) {
        const imageModule = await images[imagePath]();
        setImageSrc(imageModule.default);
      }
    };
    loadImage();
  }, [project.imageName]);

  return (
    <div
      ref={ref}
      className={`${styles.projectCard} ${inView ? styles.animate : ""}`}
    >
      {imageSrc && (
        <div className={styles.imageContainer}>
          <img src={imageSrc} alt={project.title} className={styles.image} />
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
