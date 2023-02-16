import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainComponent from './mainComponent'
import Footer from './footer'
import Hero from './hero'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <Hero />
      <MainComponent />
      <Footer />
    </div>
  </React.StrictMode>,
)
