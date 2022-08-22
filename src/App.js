import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile section='Ava + Description'/>

      <footer className="footer"></footer>
    </div>
  )
}

export default App
