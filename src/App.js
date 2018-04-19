import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import './styles/theme.css'

// COMPONENTS
import NavBar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Reviews from './components/Reviews'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="landingImage">
        {/* NAVIGATION */}
        <NavBar />

        {/* ROUTES */}
        <Switch>
          <Route exact path='/' render={() => {
            return <Home />
          }} />
          <Route path='/about' render={() => {
            return <About />
          }} />
          <Route path='/contact' render={() => {
            return <Contact />
          }} />
          <Route path='/reviews' render={() => {
            return <Reviews />
          }} />
        </Switch>

        {/* FOOTER */}
        <Footer />
      </div>
    )
  }
}

export default App
