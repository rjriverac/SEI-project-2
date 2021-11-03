import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const CharacterLink = ({ index, address, url }) => {

  const [characterStuff,setCharacterStuff] = useState(null)

  useEffect(()=> {
    const charinfo = async () => {
      try {
        const { data } = await axios.get(`${url}`)
        const result = [data.name,data.img_url]
        setCharacterStuff(result)
      } catch (error) {
        console.log(error)
      }
    }
    charinfo()
  },[index])

  return (
    <>
      { 
        characterStuff ? 
          <div className="column is-one-quarter" key={index}>
            <Link to={`/characters/${address}`}  className="card">
              <div className="card-content has-background-primary-dark">
                <div className="card-image">
                  <figure className="image is-square">
                    <img src={characterStuff[1]}/>
                  </figure>
                </div>
                <div className="content has-text-centered has-text-light">
                  <p className="title is-5 has-text-weight-normal">{characterStuff[0]}</p>
                </div>
              </div>
            </Link>
          </div>
          :
          <p><i className="fa-solid fa-hourglass"></i>Loading..</p>
      }
    </>
    
  )
}

export default CharacterLink