import React, { createContext, useContext, useEffect, useState } from 'react';

const PizzaContext = createContext();

export const usePizzas = () => {
  return useContext(PizzaContext);
};

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [shopCart, setShopCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://restoback-2.onrender.com/platos');
      const data = await response.json();
      const pizzaData = data.map((pizza) => ({
        ...pizza,
        quantity: 1 // Agregar la propiedad quantity con el valor inicial 1
      }));
      setPizzas(pizzaData);
      console.log("Pizzas cargadas:", pizzaData);
      
      // Actualizar el número total de pizzas
      setTotal(pizzaData.length);
    } catch (error) {
      console.error("Error fetching pizza data:", error);
    }
  };

  const addPizzaToCart = (pizza) => {
    setShopCart([...shopCart, pizza]);
    setTotal(total + 1); // Incrementar el número total de pizzas
  };
  const removePizzaFromCart = (pizzaId) => {
    const updatedCart = shopCart.filter(pizza => pizza.id !== pizzaId);
    const removedPizza = shopCart.find(pizza => pizza.id === pizzaId); // Cambio de removedpizza a removedPizza
    setShopCart(updatedCart);
    setTotal(total - 1); // Decrementar el número total de pizzas
  };
  
  

  const clearCart = () => {
    setShopCart([]);
    setTotal(0); // Reiniciar el número total de pizzas
  };

  const addPizza = async (newPizza) => {
    try {
      const response = await fetch('https://restoback-2.onrender.com/platos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPizza)
      });
      if (response.ok) {
        // Actualizar la lista de pizzas después de agregar una nueva pizza
        fetchData();
        console.log('Pizza agregada con éxito:', newPizza);
      } else {
        console.error('Error al agregar pizza:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar pizza:', error);
    }
  };

  const removePizza = async (pizzaId) => {
    try {
      const response = await fetch(`https://restoback-2.onrender.com/platos/${pizzaId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Actualizar la lista de pizzas después de eliminar una pizza
        fetchData();
        console.log('Pizza eliminada con éxito:', pizzaId);
      } else {
        console.error('Error al eliminar pizza:', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar pizza:', error);
    }
  };

  const editPizza = async (editedPizza) => {
    try {
      const response = await fetch(`https://restoback-2.onrender.com/platos/${editedPizza.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editedPizza)
      });
      if (response.ok) {
        // Actualizar la lista de pizzas después de editar una pizza
        fetchData();
        console.log('Pizza editada con éxito:', editedPizza);
      } else {
        console.error('Error al editar pizza:', response.statusText);
      }
    } catch (error) {
      console.error('Error al editar pizza:', error);
    }
  };

  return (
    <PizzaContext.Provider value={{ pizzas, shopCart, total, addPizzaToCart, removePizzaFromCart, clearCart, addPizza, removePizza, editPizza }}>
      {children}
    </PizzaContext.Provider>
  );
};
