import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Menu from '../components/menu'
import MoviePoster from '../components/moviePoster'
import SeriePoster from '../components/seriePoster'
import '../global.css'
import '../styles/home.css'

const moviesUrl = import.meta.env.VITE_API
const seriesUrl = import.meta.env.VITE_API_TV_SERIE
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {

            //get movie from api

        const [movies, setMovies] = useState([])

            async function getMovies(url){
                const response = await fetch(url)
                const data = await response.json()

                    setMovies(data.results)
            }

                useEffect(()=>{
                    const showMovies = `${moviesUrl}top_rated?${apiKey}`
                    getMovies(showMovies)
                }, [])

            // get series from api

        const[series, setSeries] = useState([])

                async function getSeries(url){
                    const response = await fetch(url)
                    const data = await response.json()

                        setSeries(data.results)
                }

                    useEffect(()=>{
                        const showSerie = `${seriesUrl}top_rated?${apiKey}`
                        getSeries(showSerie)
                    }, [])

            // get popular series from api        

        const [currentSeries, setCurrentSeries] = useState([])

            async function getCurrentSeries(url){
                const response = await fetch(url)
                const data = await response.json()

                    setCurrentSeries(data.results)
            }

                useEffect(()=>{
                    const showCurrentSeries = `${seriesUrl}popular?${apiKey}`
                    getCurrentSeries(showCurrentSeries)
                }, [])

  return (
    <div >
        <Menu/>

        <div id="contents">
            
            <h2>Filmes aclamados pela crítica</h2>
            <div className="movies">
            {
                movies.map(
                    movie=>(
                        <MoviePoster movie={movie} key={movie.id}/>
                    )
                )
            }
            </div>


            <h2>Séries mais bem avaliadas</h2>
            <div className='series'>

               {
                series.map(
                    serie=>(
                        <SeriePoster serie={serie} key={serie.id}/>
                    )
                )
               }
            </div>
            <h2>Populares no momento</h2>
            <div className='series'>

               {
                currentSeries.map(
                    serie=>(
                        <SeriePoster serie={serie} key={serie.id}/>
                    )
                )
               }
            </div>
        </div>
    </div>
  )
}

export default Home