import React from 'react'
import PopularMovies from './PopularMovies'
import Header from './Header'
import '../App.css'

const Home = () => {

    return (
        <div>
            <Header/>
            <PopularMovies/>
        </div>
    )
}

export default Home