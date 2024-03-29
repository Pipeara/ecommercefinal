import React from "react";
import MenuCard from "./MenuCard";
import pizzaData from "./data/pizzaData";

export default function Menu() {
  return (
    <div id="menu">
      <div className="menu-img">
        <h3>Pizza Menu</h3>
      </div>
      <div id="menuItem">
        {
          pizzaData.map((pizza) => (
            <MenuCard
              key={pizza.id}
              name={pizza.name}
              description={pizza.description}
              price={pizza.price}
              image={pizza.image}
              // Aplica una clase CSS condicionalmente según la longitud de la descripción
              descriptionClassName={
                pizza.description && pizza.description.length > 50 ? "menu-description-large" : "menu-description"
              }
            />
          ))
        }
      </div>
    </div>
  );
}
