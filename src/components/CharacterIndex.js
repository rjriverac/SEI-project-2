import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'


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
              <CharacterCard 
                character={character}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </section>
    
  )
}

export default CharacterIndex