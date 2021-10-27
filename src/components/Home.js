import React from 'react'
import splash from '../assets/splash.jpg'

const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar">
      
      <div className="hero-body">
        <figure className="image">
          <img src={splash}/>
        </figure>
        <div className="container has-text-centered">
          <p className="title has-text-centered">Final Space</p>
        </div>
        
      </div>
    </section>
  )
}
export default Home