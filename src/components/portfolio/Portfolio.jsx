import React from "react";
import "./portfolio.css";
/* import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg"; */

const data = [
  {
    id: 1,
    image: 'https://www.ambitojuridico.com/sites/default/files/styles/imagen_800x400/public/fachada-superintendenciasupersociedades.jpg.webp?itok=FMru5gUK',
    title: "Supersociedades tendrá que vigilar entidades extranjeras sin ánimo de lucro",
    github: "https://www.ambitojuridico.com/",
    demo: "https://www.ambitojuridico.com/noticias/administrativo/supersociedades-tendra-que-vigilar-entidades-extranjeras-sin-animo-de-lucro",
  },
  {
    id: 2,
    image: 'https://img.lalr.co/cms/2022/09/08155525/final-9.jpg',
    title: "Palacios Lleras explica su proceso de relevo generacional",
    github: "https://www.asuntoslegales.com.co/derecho-administrativo",
    demo: "https://www.asuntoslegales.com.co/consumidor/palacios-lleras-explica-su-proceso-de-relevo-generacional-con-nombramiento-de-un-nuevo-socio-3443168",
  },
  {
    id: 3,
    image: 'https://www.garrigues.com/sites/default/files/images-news/manuel-groenewold_in.jpg',
    title: "Novedades en materia de derecho administrativo",
    github: "https://www.garrigues.com/es_ES",
    demo: "https://www.garrigues.com/es_ES/noticia/colombia-novedades-materia-derecho-administrativo",
  },
/*   {
    id: 4,
    image: IMG4,
    title: "Maintaining tasks and tracking progress",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    image: IMG5,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Charts templates & infographics in Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  }, */
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Actualidad Derecho Administrativo</h5>
      <h2>Blog de Noticias</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Página
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Noticia
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
