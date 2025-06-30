import React from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'

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

