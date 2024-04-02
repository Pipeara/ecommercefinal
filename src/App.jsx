import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Login from './components/Login';
import LoginAdmin from './components/LoginAdmin';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Registro from './components/Registro';
import { PizzaProvider } from './Context/PizzaContext';
import AdminUser from './components/AdminUser';
import './components/PrettyPizza.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <PizzaProvider>
      <Router>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={isLoggedIn ? <Menu /> : <Navigate to="/login" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/loginAdmin" element={<LoginAdmin setIsLoggedIn={setIsLoggedIn} />} />
          {/* Redirige a AdminUser si está autenticado */}
          {isLoggedIn && <Route path="/AdminUser" element={<AdminUser />} />}
          {/* Rutas específicas para AdminUser */}
          <Route path="/admin/users" element={<AdminUser />} />
          {/* Agregamos la ruta para redirigir a la página de administrador */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </PizzaProvider>
  );
};

export default App;
