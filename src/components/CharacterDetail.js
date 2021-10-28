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
            <div>
              <h2 className="title is-size-1 has-text-white has-text-weight-normal animate__animated animate__slow animate__slideInLeft">{character.name.toUpperCase()}</h2>
              <hr />

              <div className="columns">
                <div className="column is-one-third-desktop is-one-half-tablet animate__animated animate__slow animate__slideInDown">
                  <figure className="image">
                    <img src={character.img_url} alt={character.name}/>
                  </figure>
                </div>

                <div className="column is-one-third-desktop is-one-half-tablet animate__animated animate__slow animate__slideInRight">
                  <div className="tile is-ancestor is-vertical">
                    <div className ="tile is-parent">
                      <div className="tile is-parent">
                        <div className="tile is-child notification is-info is-light">
                          <p className="title has-text-weight-normal"><i className="fas fa-user-secret"></i> Aliases:</p>
                          {character.alias.map((name,index)=> {
                            return (
                              <li key={index}>{name}</li>
                            )
                          })}
                        </div>
                      </div>
                      <div className="tile is-parent is-vertical">
                        <div className="tile is-child notification is-link is-light">
                          <p className="title has-text-weight-normal"><i className="fab fa-reddit-alien"></i>  Species:</p>
                          <p className="subtitle">{character.species}</p>
                          <p className="title has-text-weight-normal"><i className="fas fa-globe-europe"></i> Origin:</p>
                          <p className="subtitle">{character.origin}</p>
                          <p className="title has-text-weight-normal">Gender:</p>
                          <p className="subtitle">{character.gender}</p>
                          <p className="title has-text-weight-normal"><i className="fas fa-hat-wizard"></i> Hair:</p>
                          <p className="subtitle">{character.hair}</p>
                        </div>
                        <div className="tile is-child notification is-danger is-light">
                          <p className="title has-text-weight-normal"><i className="fas fa-trophy"></i> Abilities</p>
                          {character.abilities.map((ability,index)=>{
                            return (
                              <li key={index}>{ability}</li>
                            )
                          })}
                        </div>
                      </div> 
                    </div>
                    <div className="tile is-parent">
                      <div className="tile is-child notification is-warning is-light">
                        <p className="title has-text-weight-normal"><i className="fas fa-quote-left"></i> Quotes <i className="fas fa-quote-right"></i></p>

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
      {/* <section className="section has-background-link-dark"></section> */}
    </>
  )
}
export default CharacterDetail