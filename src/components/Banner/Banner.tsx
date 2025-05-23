import React from "react";
import styles from "./Banner.module.css";
import minhaFoto from "../../assets/images/profile-pic.png";

const Banner: React.FC = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Curriculo_Gabrielle_Celestina.pdf";
    link.download = "Curriculo_Gabrielle_Celestina.pdf";
    link.click();
  };

  const goToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.containerbanner}>
        <div className={styles.description}>
          <h1>Olá, eu sou</h1>
          <h1>
            <span>Gabrielle Celestina :)</span>
          </h1>
          <p>Desenvolvedora Front-End</p>
        </div>

        <div className={styles.buttons}>
          <button
            className={`${styles.btn} ${styles.btnPrimary}`}
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
          <button
            className={`${styles.btn} ${styles.btnSecondary}`}
            onClick={goToContact}
          >
            Entrar em contato
          </button>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img
          src={minhaFoto}
          alt="Foto de Gabrielle Celestina"
          className={styles.foto}
        />
      </div>
    </section>
  );
};

export default Banner;
