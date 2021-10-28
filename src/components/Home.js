import React from 'react'
import splash from '../assets/splash.jpg'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <section className="hero is-fullheight-with-navbar">
      
      <div className="hero-body">
        <figure className="image">
          <img src={splash}/>
        </figure>
        <div className="container has-text-centered">
          <p className="title has-text-centered">Final Space</p>
          <p className="subtitle">An epic animated sci-fi comedy about a spaceman named Gary</p>
          <div>
            <Link to="/characters"><button className="button is-primary m-5">Go to Characters</button></Link>
            <Link to="/episodes"><button className="button is-primary m-5">See the list of Episodes</button></Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}
export default Home