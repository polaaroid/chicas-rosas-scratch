import React from 'react';
import Header from './components/Header';
import MainImage from './components/MainImage';
import Posts from './components/Posts';
import NuestraMision from './components/NuestraMision';
import NuestrosProyectos from './components/NuestrosProyectos';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainImage />
        <Posts />
        <NuestraMision />
        <NuestrosProyectos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
