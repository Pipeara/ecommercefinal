import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setIsLoggedIn }) { // Asegúrate de recibir setIsLoggedIn como una prop
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState(false);
  const [alertaDos, setAlertaDos] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Iniciando sesión...");
  
    // URL y endpoint del servidor de autenticación
    const urlServer = "https://restoback-2.onrender.com";
    const endpoint = "/usuarios";

    // Credenciales del usuario
    const usuario = { email, password };

    try {
      // Verificar si el email y la contraseña están ingresados
      if (!email || !password) return setAlerta(true);

      // Realizar la solicitud de autenticación al servidor utilizando fetch
      const response = await fetch(urlServer + endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      // Verificar si la solicitud fue exitosa
      if (response.ok) {
        // Convertir la respuesta a JSON
        const data = await response.json();

        // Verificar si el usuario está en la base de datos
        if (data.existe) {
          // Indicar que el usuario ha iniciado sesión
          setIsLoggedIn(true);
          // Redirigir al usuario a la página de menú
          navigate("/menu");
        } else {
          // Usuario no encontrado en la base de datos
          setAlertaDos(true);
          console.error('Usuario no encontrado en la base de datos');
        }
      } else {
        // Manejar errores de autenticación
        setAlertaDos(true);
        console.error('Error de autenticación:', response.statusText);
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  return (
    <div className="login-container"> 
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group"> 
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> 
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Ingresar</button> 
      </form>
      {alerta && <p>Por favor ingrese su email y contraseña.</p>}
      {alertaDos && <p>Usuario no encontrado en la base de datos.</p>}
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;
