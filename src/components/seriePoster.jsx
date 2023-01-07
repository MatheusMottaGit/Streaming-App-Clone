
import React from 'react'
import { Link } from 'react-router-dom'

const imageUrl = import.meta.env.VITE_IMG

const SeriePoster = ({serie, showLink = true}) => {

  return (
        <Link to={`/serie/${serie.id}`}>
          <div>
            <img src={imageUrl + serie.poster_path} alt={serie.name} />
          </div>
        </Link>
  )
}

export default SeriePoster