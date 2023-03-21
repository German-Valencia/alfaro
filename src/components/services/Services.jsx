import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Especialización</h5>
      <h2>Derecho Administrativo</h2>
      <div className="container services__container">

      <article className="service">
          <div className="service__head">
            <h3>Asesorías más demandadas</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Asesoría creación de empresa parte jurídica Cámara de Comercio.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Régimen laboral Empleador y Trabajador.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Relaciones contractuales entidades estatales y contratistas.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Representación judicial conciliación prejudicial materia administrativa.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Procesos laborales única y primera instancia.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Nulidad traslado fondo de pensión.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Proceso declaración pertenencia.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Saneamiento de la falsa tradición.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Demandas contra el Estado</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Acciones de tutela.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Acciones populares.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Acciones de grupo.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Acciones de cumplimiento.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Asesoría jurídica y trámites ante superintendencias.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Asesoría legal y representación judicial en demandas contra el
                Estado Colombiano.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Conciliaciones administrativas para agotar el requisito de
                procedibilidad.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Medios de Control</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Nulidad por inconstitucionalidad.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Control inmediato de legalidad.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Nulidad y restablecimiento del derecho.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Nulidad electoral.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Reparación directa.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Controversias contractuales.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Repetición.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pérdida de investidura.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Controversias contractuales.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Responsabilidad del Estado</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Privación injusta de la libertad.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Accidentes de tránsito.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Actos administrativos.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Daño a la salud y negligencia médica.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Daño especial.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Daños ambientales.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ejecución de obras públicas.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Falla presunta del servicio.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Falla probada del servicio.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
