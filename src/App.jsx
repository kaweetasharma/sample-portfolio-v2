import React from 'react';
import './App.css';
import Home from './components/home/Home';
import Services from './components/home/services/Services';
import Skills from './components/home/skills/Skills';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
function App() {
  return (
    <main className="main">
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
    </main>
  );
}

export default App;
