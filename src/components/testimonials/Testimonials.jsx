import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
// import Swiper core and required modules
import { Pagination, /* Navigation */  } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
/* import 'swiper/css/navigation'; */

const data = [
  {
    avatar: AVTR1,
    name: "Fernanda Valencia",
    review:
      "Ha sido un gran apoyo legal, gracias al servicio de asesoría jurídica que me ha prestado. Desde hace varios años, ha demostrado transparencia, seriedad y cumplimiento en su trabajo.",
  },
  {
    avatar: AVTR2,
    name: "Julian Guerra",
    review:
      "Recibimos un excelente servicio en el tiempo que trabajó con nosotros, contamos con el apoyo para la vigilancia presencial de cada uno de los procesos administrativos y legislativos.",
  },
  {
    avatar: AVTR3,
    name: "Camilo Puerta",
    review:
      "Ha sido un gran apoyo legal, gracias al servicio de asesoría jurídica que me ha prestado. Desde hace varios años, demostradon transparencia, seriedad y cumplimiento en su trabajo.",
  },
  {
    avatar: AVTR4,
    name: "Diana Aguilera",
    review:
      "No tengo palabras para expresar mi agradecimiento, por el registro de marca. De parte de mi familia les agradecemos enormemente su ayuda. Dios lo bendiga siempre, mil gracias.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Clientes comparten sus</h5>
      <h2>Testimonios</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, /* Navigation */]}
        spaceBetween={40}
        slidesPerView={1}
        /* navigation */
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, review, name }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
