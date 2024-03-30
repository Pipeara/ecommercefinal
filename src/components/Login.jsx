import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Instancia useNavigate para manejar la navegación

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí normalmente se realizaría la lógica de autenticación
    // Si el inicio de sesión es exitoso, redirigimos al usuario a la página de menú
    // Usamos navigate('/menu') para navegar a la ruta "/menu"
    // En este ejemplo, simplemente redirigimos al usuario directamente a "/menu"
    navigate('/menu');
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
      <p>¿No tienes una cuenta? <Link to="/registro">Regístrate aquí</Link></p>
    </div>
  );
}

export default Login;
