import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Abogado Asesor Jurídico</h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Sector Privado</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Abogado Asesor Jurídico Independiente</h4>
                <small className="text-light">Desde 2017</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
        {/* END FRONTEND */}

        <div className="experience__backend">
          <h3>Sector Público</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Edil Comuna 2 Palmira V.</h4>
                <small className="text-light">2016 - 2019</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Edil Comuna 2 Palmira V.</h4>
                <small className="text-light">2020 - 2023</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
