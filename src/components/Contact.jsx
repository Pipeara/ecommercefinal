import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsPersonFill, BsEnvelopeFill, BsPhone } from "react-icons/bs";
import './Contact.css'; // Importa los estilos CSS

const Contact = () => {
  return (
    <Container className="contact-container">
      <Row>
        <Col md={8} className="text-center">
          <h4 className="font-weight-bold">Contacta con nuestro Restaurante</h4>
          <p className="contact-description">
            Para una atención más personalizada, ponte en contacto con nosotros y podrás acceder a cupones de descuento y excelentes promociones.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col md={6} className="contact-details">
          <div className="contact-info">
            <BsPersonFill className="text-danger mr-2" />
            <span>Nombre:</span> Nombre del contacto
          </div>
          <div className="contact-info">
            <BsEnvelopeFill className="text-info mr-2" />
            <span>Correo:</span> correo@example.com
          </div>
          <div className="contact-info">
            <BsPhone className="text-success mr-2" />
            <span>Teléfono:</span> 1234567890
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
