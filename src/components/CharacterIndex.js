import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const CharacterIndex = () => {

  const [characterArray,setCharacterArray] = useState([])
  const [search, setSearch] = useState('')
  const [filteredCharacters, setFiltered] = useState([])

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

  useEffect(() => {
    const filteredCharac = () => {
      const regexSearch = new RegExp(search, 'i') 
      const filtered = characterArray.filter(character => {
        return regexSearch.test(character.name)
      })
      setFiltered(filtered)
    } 
    filteredCharac()
  }, [search])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <section className="section columns">
      <div className="column  is-narrow">
        <div className="control has-icons-left">
          <input className="input is-rounded is-hovered" placeholder="Search characters" onChange={handleSearch} type="search"/>
          <span className="icon is-left">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div className="container column">
        <div className="columns is-multiline">
          {filteredCharacters.length ? 
            filteredCharacters.map((character,index)=> {
              return (
                <CharacterCard 
                  value={character}
                  key={index}
                  item='characters'
                />
              )
            })
            : characterArray.map((character,index) => {
              return (
                <CharacterCard 
                  value={character}
                  key={index}
                  item='characters'
                />
              )
            })}
        </div>
      </div>
    </section>
    
  )
}

export default CharacterIndex