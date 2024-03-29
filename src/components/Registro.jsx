import React, { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Registro.css';

const Registro = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); // Limpiar el mensaje de error al cambiar los valores del formulario
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://restoback-2.onrender.com/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });
      if (response.ok) {
        alert('¡Registro exitoso!'); // Mostrar mensaje de éxito
        // Reiniciar el formulario después del registro exitoso
        setFormData({
          email: '',
          password: '',
        });
      } else {
        if (response.status === 400) {
          const data = await response.json();
          setError(data.error); // Establecer el mensaje de error si el usuario ya está registrado
        } else {
          console.error('Error en el registro:', response.statusText);
          alert('¡Hubo un error en el registro! Por favor, inténtalo de nuevo.');
        }
      }
    } catch (error) {
      console.error('Error en el registro:', error);
      alert('¡Hubo un error en el registro! Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <Card className="mt-3 cardStyle">
      <Card.Body className="formContainer">
        <Card.Title className="text-center cardTitle">
          Crea tu cuenta en Little JhonS
        </Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Contraseña"
            />
          </Form.Group>

          {/* Mostrar el mensaje de error si existe */}
          {error && <p className="errorMessage">{error}</p>}

          <Button type="submit" className="w-100 primary submitButton">
            Crear cuenta
          </Button>
        </Form>
        
      </Card.Body>
    </Card>
  );
};

export default Registro;
