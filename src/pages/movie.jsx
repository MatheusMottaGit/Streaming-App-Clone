import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import MoviePoster from '../components/moviePoster'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import Menu from '../components/menu'

import '../styles/home.css'
import '../global.css'

const Movie = () => {

      const {id} = useParams()

      const [movie, setMovie] = useState(null)

      async function getMovies(url){
        const response = await fetch(url)
        const data = await response.json()

            setMovie(data)
    }

        useEffect(()=>{
            const showMovie = `${moviesUrl}${id}?${apiKey}`
            getMovies(showMovie)
        }, [])

  return (
    <div className="container">
    <Menu/>
        {
          movie &&
          <div className="container-movie">
            {
              <>
                <MoviePoster movie={movie} key={movie.id}/>
                  <div className="content">
                    <h3>{movie.original_title}</h3>
                    <p>{movie.overview}</p> 
                  </div> 
              </>
            }
          </div>
        }
    </div>
  )
}

export default Movie