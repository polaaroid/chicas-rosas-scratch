import React from 'react';
import '../styles/Activities.css'; // Asegúrate de tener un archivo CSS para estilos

const Activities = () => {
  return (
    <section className="activities-section">
      <div className="activities-content">
        <div className="activities-text">
          <h2>Nuestras Actividades</h2>
          <p>Descripción breve de las actividades que realiza la ONG. Aquí puedes detallar los eventos, campañas y programas que lleváis a cabo para apoyar la causa.</p>
        </div>
        <div className="activities-image">
          <img src="ruta/a/tu/imagen.jpg" alt="Descripción de la actividad" />
        </div>
      </div>
    </section>
  );
};

export default Activities;
