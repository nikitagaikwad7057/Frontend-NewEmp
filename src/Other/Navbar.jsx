import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Makeup Product's</div>
      <div className="navbar-buttons">
        <Link to={"/addproduct"} >Add Product</Link>
        
        <button>SignIn</button>
        <button>SignOut</button>
    
      </div>
    </nav>
  );
};

export default Navbar;
