import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

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
        // setQuotes(data.filter(quote => {
        //   return quote.by === character.name
        // }))
      } catch (error) {
        console.log(error)
      }
    }
    getData()
    getQuotes()
  }, [id])

  console.log(quotes)
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
                <div className="tile is-ancestor is-vertical">
                  <div className ="tile is-parent">
                    <div className="tile is-parent">
                      <div className="tile is-child notification is-info">
                        <p className="title is-4">Aliases:</p>
                        {/* <p className="subtitle">{character.gender}</p>
                        <p className="title is-5">🦍 Hair:</p>
                        <p className="subtitle">{character.hair}</p> */}
                        {character.alias.map((name,index)=> {
                          return (
                            <li key={index}>{name}</li>
                          )
                        })}
                      </div>
                    </div>
                    <div className="tile is-parent is-vertical">
                      <div className="tile is-child notification is-success">
                        <p className="title is-4">👤 Species:</p>
                        <p className="subtitle">{character.species}</p>
                        <p className="title is-5">🌍 Origin:</p>
                        <p className="subtitle">{character.origin}</p>
                        <p className="title is-4">Gender:</p>
                        <p className="subtitle">{character.gender}</p>
                        <p className="title is-5">🦍 Hair:</p>
                        <p className="subtitle">{character.hair}</p>
                      </div>
                      <div className="tile is-child notification is-link">
                        <p className="title is-4">🏆 Abilities</p>
                        {character.abilities.map((ability,index)=>{
                          return (
                            <li key={index}>{ability}</li>
                          )
                        })}
                      </div>
                    </div> 
                  </div>
                  <div className="tile is-parent">
                    <div className="tile is-child notification is-danger">
                      <p className="title is-4">Quotes</p>
                      {/* {quotes.map((quote,index) => {
                        return (
                          <li key={index}>{quote.quote}</li>
                        )
                      })} */}

                      {quotes.filter(quote => quote.by === character.name).map((quote,index)=> {
                        return (
                          <li key={index}>{quote.quote}</li>
                        )
                      })}
                    </div>
                  </div>

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