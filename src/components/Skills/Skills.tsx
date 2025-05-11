import React from "react";
import { useInView } from 'react-intersection-observer';
import styles from "./Skills.module.css";
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiGit, SiStyledcomponents, SiNodedotjs, SiMysql, SiGitlab } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React.js", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Styled Components", icon: <SiStyledcomponents /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "GitLab", icon: <SiGitlab /> },
];

const Skills: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,
  });

  return (
    <section className={styles.skills} id="skills">
      <h2 
        ref={titleRef} 
        className={`${styles.title} ${titleInView ? styles.animate : ''}`}
      >
        Habilidades
      </h2>
      <ul className={styles.list}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </ul>
    </section>
  );
};

const SkillItem = ({ skill }: { skill: { name: string, icon: JSX.Element } }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.5,
  });

  return (
    <li
      ref={ref}
      className={`${styles.item} ${inView ? styles.animate : ''}`}
    >
      <span className={styles.icon}>{skill.icon}</span>
      <span className={styles.name}>{skill.name}</span>
    </li>
  );
};

export default Skills;
