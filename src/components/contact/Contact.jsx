import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>galfarotascon@gmail.com</h5>
            <a
              href="mailto:galfarotascon@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Alfaro</h5>
            <a
              href="https://m.me/gustavoadolfo.alfarotascon"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+57 301 7416338</h5>
            <a
              href="https://wa.me/+573017416338"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Tu nombre completo"
            required
          />
          <input type="email" name="email" placeholder="Tu Email" required />
          <textarea name="message" rows="7" placeholder="Tu mensaje" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
