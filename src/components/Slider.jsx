import React, { useState, useEffect } from 'react';
import './Slider.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import pizzaData from './data/pizzaData'; // Importa los datos de pizzaData
import './Slider.css'
const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pizzaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pizzaData.length - 1 : prevIndex - 1
    );
  };

  // Función para cambiar automáticamente al siguiente slide
  const autoNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pizzaData.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Efecto secundario para iniciar la rotación automática cuando el componente se monta
  useEffect(() => {
    const intervalId = setInterval(autoNextSlide, 3000); // Cambia de slide cada 3 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='slider'>
      <button className='prev' onClick={prevSlide}><IoIosArrowBack /></button>
      <div className='slides' style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {pizzaData.map((pizza, index) => (
          <img
            key={index}
            src={pizza.image}
            alt={pizza.name}
            className={index === currentImageIndex ? 'active' : ''}
          />
        ))}
      </div>
      <button className='next' onClick={nextSlide}><IoIosArrowForward /></button>
    </div>
  );
};

export default Slider;