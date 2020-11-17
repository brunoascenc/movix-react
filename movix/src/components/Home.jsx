import React from 'react'
import PopularMovies from './PopularMovies'
import Header from './Header'
import Footer from './Footer'
import '../App.css'

const Home = () => {

    return (
        <div>
            <Header/>
            <PopularMovies/>
            <Footer/> 
        </div>
    )
}

export default Home