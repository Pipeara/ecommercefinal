import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
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

  // Nuevo estado para la pizza que se está editando
  const [editingPizza, setEditingPizza] = useState(null);

  const handleNewPizzaChange = (e) => {
    const { name, value } = e.target;
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingPizza) {
      // Si estamos editando una pizza, realizamos la edición
      // Implementa la lógica de edición aquí
      alert('¡Pizza editada con éxito!');
      setEditingPizza(null); // Limpia la pizza que se está editando
    } else {
      addPizza(newPizza);
      setNewPizza({ nombre: '', descripcion: '', precio: '', img: '' });
      alert('¡Pizza agregada con éxito!');
    }
  };

  const handleEditClick = (pizza) => {
    // Cuando se hace clic en el botón de editar de una pizza,
    // establecemos la pizza que se está editando y llenamos el formulario con sus datos
    setEditingPizza(pizza);
    setNewPizza({
      nombre: pizza.nombre,
      descripcion: pizza.descripcion,
      precio: pizza.precio,
      img: pizza.img
    });
  };

  const handleDeleteClick = (id) => {
    // Maneja el evento de eliminación de una pizza
    removePizza(id);
  };

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
          <h2 className="admin-title">{editingPizza ? 'Editar Pizza' : 'Agregar Nueva Pizza'}</h2>
          <input type="text" name="nombre" value={newPizza.nombre} placeholder="Nombre" onChange={handleNewPizzaChange} required />
          <input type="text" name="descripcion" value={newPizza.descripcion} placeholder="Descripción" onChange={handleNewPizzaChange} required />
          <input type="number" name="precio" value={newPizza.precio} placeholder="Precio" onChange={handleNewPizzaChange} required />
          <input type="url" name="img" value={newPizza.img} placeholder="URL de la imagen" onChange={handleNewPizzaChange} required />
          <div className="form-buttons">
            <button type="submit" className="add-button">{editingPizza ? 'Guardar' : 'Agregar'}</button>
            {editingPizza && <button type="button" className="cancel-button" onClick={() => setEditingPizza(null)}>Cancelar</button>}
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
                <td>{truncateDescription(pizza.descripcion, 50)}</td>
                <td>${pizza.precio}</td>
                <td><img src={pizza.img} alt={pizza.nombre} className="pizza-image img-responsive" /></td>
                <td>
                  <button className="edit-button" onClick={() => handleEditClick(pizza)}>Editar</button>
                  <button className="delete-button" onClick={() => handleDeleteClick(pizza.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="users-button-container">
        <Link to="/AdminUser" className="users-button">Ver Usuarios</Link>
      </div>
    </div>
  );
};

export default Admin;
