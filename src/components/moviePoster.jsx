import React from 'react'

const imageUrl = import.meta.env.VITE_IMG

import {Link} from 'react-router-dom'

const MoviePoster = ({movie, showLink = true}) => {

  return (
        <div>
              <Link to={`/movie/${movie.id}`}>
                  <img src={imageUrl + movie.poster_path} alt={movie.title} />
              </Link>
        </div>
  )
}

export default MoviePoster