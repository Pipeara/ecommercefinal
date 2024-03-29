import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Popup from 'reactjs-popup';
import { AiOutlineClose } from 'react-icons/ai';
import { BsCart4 } from 'react-icons/bs';
import { GiFullPizza } from 'react-icons/gi';
import Cart from "./Cart";
import logo from '../components/image/logo.png';
import './PrettyPizza.css';

const Header = () => {
  const { quantity } = useSelector((state) => state.cart);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-section" id='home'>
      <h3>
        <img src={logo} alt="Logo" className="logo-img" style={{ width: '100px' }} /> {/* Ajusta el tamaño del logo aquí */}
      </h3>
      <div className="header-title">
        <h3>Little John <GiFullPizza /></h3>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/contact">Contact</Link> {/* Cambiado a '/contact' */}
          <Link to="/login">Login</Link>
          <Link to="/loginAdmin">Admin</Link> {/* Cambiado a '/loginAdmin' */}
        </nav>
      </div>
      <div className="navbar">
        <Popup
          trigger={
            <button className="menu-bars">
              {quantity ? <span>{quantity}</span> : <span>Ø</span>}
              <BsCart4 onClick={showSidebar} />
            </button>
          }
          modal
          nested
        >
          {close => (
            <div className="modal">
              <button className="close" onClick={close}>
                <AiOutlineClose />
              </button>
              <Cart />
            </div>
          )}
        </Popup>
      </div>
    </div>
  );
};

export default Header;
