import React from 'react'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'

import './App.css'

// TODO: EDIT PERSONAL DATA IN COMPONENTS
// TODO: EDIT Hero component data
// TODO: EDIT About component data
// TODO: EDIT Skills component data
// TODO: EDIT Experience component data
// TODO: EDIT Projects component data
// TODO: EDIT Contact component data

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App

