import React from 'react'
import { useState, useEffect } from 'react'

import Menu from "../components/menu"
import SeriePoster from '../components/seriePoster'

const seriesUrl = import.meta.env.VITE_API_TV_SERIE
const apiKey = import.meta.env.VITE_API_KEY

import '../styles/home.css'

const SeriePage = () => {

        const [series, setSeries] = useState([])

            const getSeries = async(url)=>{
                const res = await fetch(url)
                const data = await res.json()

                    setSeries(data.results)
            }

                useEffect(()=>{
                    const showSeries = `${seriesUrl}top_rated?${apiKey}`
                        getSeries(showSeries)

                        // console.log(showSeries)
                }, [])

  return (
    <div className="container">
    <Menu/>
    <div className='list-movies'>
        {
            series.map(
                serie=>(
                    <SeriePoster key={serie.id} serie={serie}/>
                )
            )
        }
    </div>
</div>
  )
}

export default SeriePage