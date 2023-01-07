import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Menu from '../components/menu'
import MoviePoster from '../components/moviePoster'

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

import '../styles/home.css'

const Search = () => {

        const [searchParams] = useSearchParams()
        const query = searchParams.get('q')

          const[movies, setMovies] = useState([])

          async function getMovies(url){
              const response = await fetch(url)
              const data = await response.json()
  
                  setMovies(data.results)
          }
  
              useEffect(()=>{
                  const queryUrl = `${searchUrl}?${apiKey}&query=${query}`
                      getMovies(queryUrl)


              }, [query])

      

    function toUppQueryFirstLetter(string){
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
  

  return (
    <div id="container-movies">
    <Menu/>
    <h3>Buscar resultados para: {toUppQueryFirstLetter(query)}</h3>
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

export default Search