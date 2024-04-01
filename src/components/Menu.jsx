import React, { useState, useEffect } from 'react';
import MenuCard from './MenuCard';
import pizzaData from './data/pizzaData';

function Menu() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Variable de estado para controlar si el usuario ha iniciado sesión
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false); // Estado local para controlar la visibilidad del mensaje de bienvenida

  useEffect(() => {
    if (isLoggedIn) {
      setShowWelcomeMessage(true); // Mostrar el mensaje de bienvenida si el usuario ha iniciado sesión
    }
  }, [isLoggedIn]);

  return (
    <div id="menu">
      {showWelcomeMessage && <p>¡Bienvenido! Usted ha ingresado como usuario a la página de menú.</p>}
      <div className="menu-img">
        <h3>Pizza Menu</h3>
      </div>
      <div id="menuItem">
        {pizzaData.map((pizza) => (
          <MenuCard
            key={pizza.id}
            name={pizza.name}
            description={pizza.description}
            price={pizza.price}
            image={pizza.image}
            // Aplica una clase CSS condicionalmente según la longitud de la descripción
            descriptionClassName={
              pizza.description && pizza.description.length > 50 ? 'menu-description-large' : 'menu-description'
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
