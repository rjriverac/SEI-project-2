import React, { useState, useEffect } from 'react'
import axios from 'axios'


const CharacterIndex = () => {

  const [characterArray,setCharacterArray] = useState([])

  useEffect(()=> {
    const getData = async() => {
      try {
        const { data } = await axios.get('https://finalspaceapi.com/api/v0/character/')
        setCharacterArray(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])
  console.log(characterArray)
  return (
    // <h1>CharacterIndex</h1>
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {characterArray.map((character,index)=> {
            return (
              <div key={index} className="column is-one-third">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-square">
                      <img src={character.img_url} alt={character.name}/>
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">
                      <p className="title is-5">{character.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
    
  )
}

export default CharacterIndex