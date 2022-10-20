import React from 'react'

import { Header, About, Footer, Skills, Testimonial, Work } from './containers';
import { Navbar } from './components';
import './App'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;