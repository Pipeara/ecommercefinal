import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate
import './LoginAdmin.css';

const LoginAdmin = () => {
  const [email, setEmail] = useState('pipe@correo.com');
  const [password, setPassword] = useState('1234');
  const navigate = useNavigate(); // Obtén la función navigate

  const handleLogin = (e) => {
    e.preventDefault();
    // Verifica si las credenciales son válidas
    if (email === 'pipe@correo.com' && password === '1234') {
      // Si la autenticación es exitosa, redirige al usuario a la página de Admin
      navigate('/Admin'); // Redirige a la página de Admin
    } else {
      // Si las credenciales no son válidas, muestra un mensaje de error o realiza otras acciones
      alert('Correo electrónico o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <h2>Login de Administrador</h2>
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
      <p>¿Olvidaste tu contraseña? <Link to="/reset-password">Restablecer aquí</Link></p>
    </div>
  );
}

export default LoginAdmin;
