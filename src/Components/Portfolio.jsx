/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/trabajos.png";

const imageAltText = "my work";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Encuentra algunas de mis certificaciones 🎉",
    description: "En mi perfil de Credly puedes visualizar las certificaciones que he obtenido.",
    url: "https://www.credly.com/users/alejandro-yahir-gallo-botello",
  },
  {
    title: "Legal Tech Summit 2023",
    description:
      "Me enorgullece haber formado parte del Legal Tech Summit 2023 de Lawgic, donde exploramos las últimas tendencias en Derecho y tecnología. Una experiencia enriquecedora que amplió mi horizonte profesional.",
    url: "https://app.certtify.com/certificate/c7ae5f1a-2fc8-4404-979b-01c8447c3c92",
  },
  {
    title: "Diseño aplicativo movil ApPIQ",
    description:
      "Diseño para un aplicativo movil gubernamental de la mano del la Secretaria de Educación Pública de Querétaro.",
    url: "https://www.figma.com/file/4ENr6aQ6K5Yf3i06E7ffo4/AppPQ---Redise%C3%B1o?type=design&node-id=0-1&mode=design",
  },
  {
    title: "Perfil de GitHub",
    description:
      "Encontraran un poco de mi trabajo en GitHub, donde he colaborado en proyectos de código abierto.",
    url: "https://github.com/Galboa",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", animation: "5s ease-out 0s 1 slideInLeft" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
