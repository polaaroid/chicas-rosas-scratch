import React from 'react';

import '../styles/MainImage.css'; // Asegúrate de importar el archivo CSS


const MainImage = () => {
  return (
    <section className="main-image-container">
      <img src="/main-image.jpg" alt="Imagen Principal" className="main-image" />
      <div className="overlay">
        <div className="overlay-content">
          <h1>Proyecto Chicas Rosas</h1>
          <p>Empoderando a las mujeres jóvenes</p>
          <button onClick={() => window.location.href = '#contact'}>Contactar</button>
        </div>
      </div>
    </section>
  );
};

export default MainImage;
