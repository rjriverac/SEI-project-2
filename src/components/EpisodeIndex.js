import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterCard from './CharacterCard'

const EpisodeIndex = () => {

  const [episodeArray, setEpisodeArray] = useState([])

  useEffect(() => {
    const getData = async() => {
      try {
        const { data } = await axios.get('https://finalspaceapi.com/api/v0/episode')
        setEpisodeArray(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])

  console.log(episodeArray)

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {episodeArray.map((episode,index)=> {
            return (
              <CharacterCard 
                value={episode}
                key={index}
                item='episodes'
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default EpisodeIndex