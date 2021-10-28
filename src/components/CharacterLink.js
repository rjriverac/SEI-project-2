import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'

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
              <div className="card-content has-background-link-dark">
                <div className="card-image">
                  <figure className="image is-square">
                    <img src={characterStuff[1]}/>
                  </figure>
                </div>
                <div className="content has-text-centered">
                  <p className="title is-6 has-text-weight-normal">{characterStuff[0]}</p>
                </div>
              </div>
            </Link>
          </div>
          :
          <p>loading</p>
      }
    </>
    
  )
}

export default CharacterLink