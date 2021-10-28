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
  

  console.log(characterStuff)
  return (
    <>
      { 
        characterStuff ? 
      
          <div key={index}>
            <Link to={`/characters/${address}`}  className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img src={characterStuff[1]}/>
                    </figure>
                  </div>
                </div>
                <div className="media-content">
                  <p>{characterStuff[0]}</p>
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