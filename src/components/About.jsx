import React from 'react';
import './PrettyPizza.css';

const About = () => {
  return (
    <div id='about'>
      <div className='about-content'>
        <h3>Discover Our Story</h3>
        <p>Welcome to our pizza paradise! We're passionate about crafting the most delicious pizzas using the finest ingredients. Whether you're craving a classic Margherita or an adventurous BBQ Chicken, we've got something for everyone.</p>
        <hr></hr>
        <p>Our journey began with a simple idea: to create mouthwatering pizzas that bring joy to every bite. From our hand-tossed dough to our signature sauces, each pizza is made with love and care. Join us on our culinary adventure and taste the difference!</p>
      </div>
      <img src='https://images.unsplash.com/photo-1600628421060-939639517883?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='family eating pizza' />
    </div>
  );
};

export default About;
