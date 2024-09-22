import React from 'react';
import '../styles/Header.css'; // Asegúrate de importar el archivo CSS

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre Nosotras</a></li>
          <li><a href="#journey">El Camino</a></li>
          <li><a href="#contact">Contactar</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
