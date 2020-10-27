import React, { useContext } from 'react'
import { DataContext } from "../data/DataProvider";
import PopularMovies from './PopularMovies'

export default function Home() {
    const value = useContext(DataContext);
    const [popular] = value.popular;

    return (
        <div>
            <PopularMovies popularMovies={popular}/>  
        </div>
    )
}
