import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import { usePizzas } from '../Context/PizzaContext';
import './Admin.css';

const Admin = () => {
  const { pizzas, addPizza, removePizza } = usePizzas();
  const [newPizza, setNewPizza] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    img: ''
  });

  const handleNewPizzaChange = (e) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPizza(newPizza);
    setNewPizza({ nombre: '', descripcion: '', precio: '', img: '' });
    alert('¡Pizza agregada con éxito!');
  };

  const handleEditPizza = () => {
    // Aquí puedes implementar la lógica para editar la pizza
    alert('Editar pizza');
  };

  // Función para truncar la descripción si es demasiado larga
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="admin-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="admin-form">
          <h2 className="admin-title">Agregar Nueva Pizza</h2>
          <input type="text" name="nombre" value={newPizza.nombre} placeholder="Nombre" onChange={handleNewPizzaChange} required />
          <input type="text" name="descripcion" value={newPizza.descripcion} placeholder="Descripción" onChange={handleNewPizzaChange} required />
          <input type="number" name="precio" value={newPizza.precio} placeholder="Precio" onChange={handleNewPizzaChange} required />
          <input type="url" name="img" value={newPizza.img} placeholder="URL de la imagen" onChange={handleNewPizzaChange} required />
          <div className="form-buttons">
            <button type="submit" className="add-button">Agregar</button>
            <button type="button" className="edit-button" onClick={handleEditPizza}>Editar</button>
          </div>
        </form>
      </div>

      <div className="table-container">
        <h2 className="admin-title">Listado de Pizzas</h2>
        <table className="pizzas-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {pizzas.map(pizza => (
              <tr key={pizza.id}>
                <td>{pizza.id}</td>
                <td>{pizza.nombre}</td>
                <td>{truncateDescription(pizza.descripcion, 50)}</td> {/* Trunca la descripción */}
                <td>${pizza.precio}</td>
                <td><img src={pizza.img} alt={pizza.nombre} className="pizza-image img-responsive" /></td>
                <td>
                  <button className="delete-button" onClick={() => removePizza(pizza.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Agrega el botón "Ver Usuarios" */}
      <div className="users-button-container">
        <Link to="/AdminUser" className="users-button">Ver Usuarios</Link>
      </div>
    </div>
  );
};

export default Admin;
