import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdminUser.css';

const AdminUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Realizar solicitud fetch para obtener la lista de usuarios
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://restoback-2.onrender.com/usuarios');
      if (!response.ok) {
        throw new Error('Error fetching users');
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`https://restoback-2.onrender.com/usuarios/`, {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Error deleting user');
      }
      // Refrescar la lista de usuarios después de eliminar el usuario
      fetchUsers();
      console.log('Usuario eliminado con ID:', id);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="admin-container">
      <h2 className="admin-title">Listado de Usuarios</h2> {/* Título encima de la tabla */}
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Correo electrónico</th>
              <th>Contraseña</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>
                  <button className="delete-button" onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="back-link-container">
        <Link to="/admin" className="back-link">Volver al Panel de Administración</Link>
      </div>
    </div>
  );
};

export default AdminUser;
