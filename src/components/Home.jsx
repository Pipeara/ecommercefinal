import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import './PrettyPizza.css';
import { IoIosArrowForward } from 'react-icons/io';
import Slider from './Slider'; // Asegúrate de importar el componente Slider
import './PrettyPizza.css'
import './Home.css'
// Comienzo del componente Home
const Home = () => {
  return (
    <div className='Home'>
      <div className='home-content'>
        <h2>Little Jhon's</h2>
        <h4>Making People Happy One Slice at a Time</h4>
        {/* Usa Link en lugar de <a> y to='/menu' */}
        <Link to='/menu'>
          <button>VIEW MENU <IoIosArrowForward /></button>
        </Link>
      </div>
      <Slider />
    </div>
  );
};

export default Home;
