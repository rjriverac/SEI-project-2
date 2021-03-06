import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ index, value, item }) => {

  return (
    <div key={index} className="column is-one-third">
      <Link to={`/${item}/${value.id}`}>
        <div className="card animate__animated animate__headShake">
          <div className="card-image">
            <figure className={`image ${item === 'characters' ? 'is-square' : 'is-2by1' }`}>
              <img src={value.img_url} alt={value.name}/>
            </figure>
          </div>
          <div className="card-header">
            <div className="card-header-title has-background-dark is-centered">
              <p className="title is-5 has-text-white">{value.name}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
export default CharacterCard