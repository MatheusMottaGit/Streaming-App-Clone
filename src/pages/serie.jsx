import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import SeriePoster from '../components/seriePoster'

const serieUrl = import.meta.env.VITE_API_TV_SERIE
const apiKey = import.meta.env.VITE_API_KEY

import Menu from '../components/menu'

import '../styles/home.css'

const Serie = () => {

      const {id} = useParams()

      const [serie, setSerie] = useState(null)

      async function getSerie(url){
        const response = await fetch(url)
        const data = await response.json()

            setSerie(data)
    }

        useEffect(()=>{
            const showSerie = `${serieUrl}${id}?${apiKey}`
            getSerie(showSerie)
        }, [])


  return (
    <div className="container">
    <Menu/>
        {
          serie
           &&
          <div className="container-serie">
            {
              <>
                <SeriePoster serie={serie} key={serie.id}/>
                  <div className="content">
                    <h3>{serie.name}</h3>
                    <p>{serie.overview}</p> 
                  </div> 
              </>
            }
          </div>
        }
    </div>
  )
}

export default Serie