import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ index, character  }) => {

  return (
    <div key={index} className="column is-one-third">
      <Link to={`/characters/${character.id}`}>
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
      </Link>
    </div>
  )
}
export default CharacterCard