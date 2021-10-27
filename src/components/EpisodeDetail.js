import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'

const EpisodeDetail = () => {
  const [episode,setEpisode] = useState(null)
  const { id } = useParams()

  useEffect(()=> {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://finalspaceapi.com/api/v0/episode/${id}`)
        setEpisode(data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  },[id])
  console.log(episode.characters.map((url)=> url.split('/')))
  return (
    // <h1>Hello</h1>
    <section className="section">
      <div className="container">
        {
          episode ?
            <div>
              <h2 className="title">{episode.name}</h2>
              <hr />
              <div className="columns">
                <div className="column is-half">
                  <figure className="image">
                    <img src={episode.img_url} alt={episode.name}/>
                  </figure>
                </div>
                <div className="column is-half">
                  <div className="tile is-ancestor is-vertical">
                    <div className="tile is-parent">
                      <div className="tile is-child box">
                        <p className="title is-6">Directed by:</p>
                        <p>{episode.director}</p>
                      </div>
                      <div className="tile is-child box">
                        <p className="title is-6">Air Date</p>
                        <p>{episode.air_date}</p>
                      </div>
                    </div>
                    <div className="tile is-parent">
                      <div className="tile is-child box">
                        <p className="title is-6">Written By</p>
                        <p>{episode.writer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            :
            <h1>Loading</h1>
        }
        {
          episode ? 
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className="tile is-child notification is-info has-text-centered">
                  <p>thebox</p>
                </div>
              </div>
            </div>
            :
            <h1>Loading</h1>
        }
      </div>
    </section>
  )
}
export default EpisodeDetail