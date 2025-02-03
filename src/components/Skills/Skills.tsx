import React from "react";
import styles from "./Skills.module.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Styled Components",
];

const Skills: React.FC = () => {
  return (
    <section className={styles.skills}>
      <h2 className={styles.title}>Habilidades</h2>
      <ul className={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.item}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
