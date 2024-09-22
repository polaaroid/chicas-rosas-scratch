import React from 'react';
import '../styles/NuestrosProyectos.css';

const NuestrosProyectos = () => {
  return (
    <section className="nuestros-proyectos">
      <h2>Nuestras Actividades</h2>
      <div className="proyectos-contenido">
        <div className="proyectos-texto">
          <div className="proyecto">
            <h3>Proyecto A</h3>
            <p>Descripción breve del Proyecto A.</p>
          </div>
          <div className="proyecto">
            <h3>Proyecto B</h3>
            <p>Descripción breve del Proyecto B.</p>
          </div>
          <div className="proyecto">
            <h3>Proyecto C</h3>
            <p>Descripción breve del Proyecto B.</p>
          </div>
        </div>
        <div className="proyectos-imagen">
          <img src="image1.png" alt="Descripción de actividades" />
        </div>
      </div>
    </section>
  );
};

export default NuestrosProyectos;
