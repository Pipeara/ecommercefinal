import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io'; // Importa el ícono de WhatsApp
import './PrettyPizza.css';

const Footer = () => {
  return (
    <div className="footer-info" id="contact">
      <h3>Little Jhons</h3>
      <p>(569)-456-8888 <span>9:00am - 5:00pm</span></p>
      <div className="social-icons" style={{ justifyContent: 'flex-end' }}> {/* Ajusta el contenedor para justificar a la derecha */}
        <a href="https://api.whatsapp.com/send?phone=56926361010&text=Hola,%20estoy%20interesado%20en%20obtener%20más%20información." target="_blank" rel="noopener noreferrer">
          <IoLogoWhatsapp className="whatsapp-icon" style={{ fontSize: '80px', color: 'green', marginRight: '20px' }} /> {/* Ajusta el tamaño, color y posición */}
        </a>
      </div>
    </div>
  );
};

export default Footer;
