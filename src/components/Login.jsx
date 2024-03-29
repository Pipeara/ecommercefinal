import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
  
    window.location.href = "/menu"; // Corregido para redirigir correctamente a la página de menú
  };

  return (
    <div className="login-container"> 
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group"> {/* Añadido una clase para agrupar los elementos del formulario */}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group"> {/* Añadido una clase para agrupar los elementos del formulario */}
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-btn">Ingresar</button> {/* Añadida una clase al botón */}
      </form>
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p> {/* Corregido el enlace a la página de registro */}
    </div>
  );
}

export default Login;
