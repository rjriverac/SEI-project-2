import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const CharacterDetail = () => {

  const [character, setCharacter] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://finalspaceapi.com/api/v0/character/${id}`)
        console.log(data)
        setCharacter(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])


  return (
    <section className="section">
      <div className="container">
        {character ?
          <div>
            <h2 className="title">{character.name}</h2>
            <hr />

            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={character.img_url} alt={character.name}/>
                </figure>
              </div>

              <div className="column is-half">
                <div className="tile is-ancestor">

                  <div className="tile is-parent">
                    <div className="tile is-child notification is-info">
                      <p className="title is-4">Gender:</p>
                      <p className="subtitle">{character.gender}</p>
                      <p className="title is-5">🦍 Hair:</p>
                      <p className="subtitle">{character.hair}</p>
                    </div>
                    <div className="tile is-child notification is-success">
                      <p className="title is-4">👤 Species:</p>
                      <p className="subtitle">{character.species}</p>
                      <p className="title is-5">🌍 Origin:</p>
                      <p className="subtitle">{character.origin}</p>
                    </div>
                  </div>
                  
                  {/* <div className="tile is-parent is-vertical">
                    <div className="tile is-child">
                      <h1>Hello</h1>
                    </div> */}
                  {/* </div>  */}

                </div>
              </div>
            </div>
          </div>

          :
          <p>...loading</p>
        }
      </div>
    </section>

  )
}
export default CharacterDetail