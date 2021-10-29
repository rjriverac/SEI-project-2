import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CharacterTiles from './CharacterTiles'

const CharacterDetail = () => {

  const [character, setCharacter] = useState(null)
  const { id } = useParams()
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://finalspaceapi.com/api/v0/character/${id}`)
        setCharacter(data)
      } catch (error) {
        console.log(error)
      }
    }
    const getQuotes = async () => {
      console.log('getting quotes')
      try {
        console.log('about to get quotes')
        const { data } = await axios.get('https://finalspaceapi.com/api/v0/quote')
        console.log('after axios')
        setQuotes(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    getQuotes()
  }, [id])

  return (
    <>
      <section className="section has-background-link-dark" id="character-detail">
        <div className="container">
          {character ?
            <CharacterTiles
              character={character}
              quotes={quotes}
            />
            :
            <p><i className="fa-solid fa-hourglass"></i>...Loading</p>
          }
        </div>
      </section>
    </>
  )
}
export default CharacterDetail