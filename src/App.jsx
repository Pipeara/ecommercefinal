import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
    setIsLoggedIn(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <PizzaProvider>
      <BrowserRouter>
        <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login handleLogin={handleLogin} />} />
          <Route path="/loginAdmin" element={<LoginAdmin handleLogin={handleLogin} />} />
          {/* Redirige a AdminUser si está autenticado */}
          {isLoggedIn && <Navigate to="/AdminUser" />}
          {/* Si no está autenticado, redirige a la página de inicio de sesión */}
         
          {/* Rutas específicas para AdminUser */}
          <Route path="/AdminUser" element={<AdminUser />} />
          <Route path="/admin/users" element={<AdminUser />} />
          {/* Agregamos la ruta para redirigir a la página de administrador */}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </PizzaProvider>
  );
  

};

export default App;
