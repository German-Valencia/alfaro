import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fkba1c7",
        "template_qqwlteo",
        form.current,
        "-Udp--UTqCmmct9wU"
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert("Tu mensaje ha sido enviado con éxito ✔");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Para Asesorías</h5>
      <h2>Contáctame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>galfarotascon@gmail.com</h5>
            <a
              href="mailto:galfarotascon@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Alfaro</h5>
            <a
              href="https://m.me/gustavoadolfo.alfarotascon"
              target="_blank"
              rel="noreferrer"
            >
              Enviar mensaje
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+57 301 7416338</h5>
            <a
              href="https://wa.me/+573017416338"
              target="_blank"
              rel="noreferrer"
            >
              Enviar mensaje
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Tu Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Tu mensaje"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
