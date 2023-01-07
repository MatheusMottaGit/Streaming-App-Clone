import React, {useState, useEffect } from 'react'
import Menu from '../components/menu'
import MoviePoster from '../components/moviePoster'

const moviesUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

import '../styles/home.css'

const MoviePage = () => {

    const[movies, setMovies] = useState([])

        async function getMovies(url){
            const response = await fetch(url)
            const data = await response.json()

                setMovies(data.results)
        }

            useEffect(()=>{
                const showMovies = `${moviesUrl}now_playing?${apiKey}`
                getMovies(showMovies)

                console.log(showMovies)
            }, [])

  return (

    <div className="container">
        <Menu/>
        <div className='list-movies'>
            {
                movies.map(
                    movie=>(
                        <MoviePoster key={movie.id} movie={movie}/>
                    )
                )
            }
        </div>
    </div>
  )
}

export default MoviePage