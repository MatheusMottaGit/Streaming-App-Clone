import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import '../styles/menu.css'
import {BiSearchAlt2} from 'react-icons/bi'

const Menu = () => {

      const navigate = useNavigate()
      const[search, setSearch] = useState('')

          const handleSubmit = (event)=>{
            event.preventDefault()

                if(!search) return

                navigate(`/search?q=${search}`)
                setSearch('')
          }

  return (
    <div>
        <nav className="menu">
              <div className="left">
                <h1>
                    <span>Rocket</span>
                            Flix
                </h1>
                <ul className="list">
                    <Link to={'/'}>
                      <li>Início</li>
                    </Link>
                    <Link to={'/serie'}>
                      <li>Séries</li>
                    </Link>
                    <Link to={'/movie'}>
                      <li>Filmes</li>
                    </Link>
                    <Link to={'/movie'}>
                      <li>Bombando</li>
                    </Link>
                </ul>
              </div>

              <div className="right">
                <form onSubmit={handleSubmit}>
                  <input 
                  type="text" 
                  name="" 
                  id="" 
                  placeholder="Filmes, séries..."
                  onChange={(event)=>setSearch(event.target.value)}
                  value={search}
                  />
                  <button type="submit">
                    <BiSearchAlt2 color="white"/>
                  </button>
                </form>
              </div>
        </nav>
    </div>
  )
}

export default Menu