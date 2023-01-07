import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home'
import Movie from './pages/movie'
import Search from './pages/search'
import MoviePage from './pages/moviesPage'
import SeriePage from './pages/seriesPage'
import Serie from './pages/serie'

function App() {

  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='/movie' element={<MoviePage/>}/>
            <Route exact path='/serie' element={<SeriePage/>}/>
            <Route path='/movie/:id' element={<Movie/>}/>
            <Route path='/serie/:id' element={<Serie/>}/>
            <Route path='search' element={<Search/>}/>
          </Routes>
        </BrowserRouter>
    </>

  )
}

export default App
