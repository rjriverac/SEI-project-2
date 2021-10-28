import React from 'react'
import splash from '../assets/Final_Space_Cover.jpeg'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered is-flex is-justify-content-center" id="hero-container">
          <div className="content p-5" id="hero-text">
            <p className="title has-text-centered has-text-white">Final Space</p>
            <p className="subtitle has-text-white">An epic animated sci-fi comedy about a spaceman named Gary</p>
            <div>
              <Link to="/characters"><button className="button is-primary m-5">Go to Characters</button></Link>
              <Link to="/episodes"><button className="button is-primary m-5">See the list of Episodes</button></Link>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  )
}
export default Home