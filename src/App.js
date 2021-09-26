import React from 'react';
import './App.css';
import Header from './components/Header';
// import Navigation from './components/Navigation';
import About from './components/About';
// import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
        <About/>
      <main>
        
        <div>
          {/* <Project></Project> */}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
