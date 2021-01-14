import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

//API Key
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY


export const DataProvider = (props) => {
  const [upcoming, setUpcoming] = useState([])
  const [popular, setPopular] = useState([])
  const [genres, setGenres] = useState([])

  const getData = () => {
    axios.all([
      axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      ),
      axios.get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
      ),
    ])
    .then((res) => {
        const upcomingMovies = res[0].data
        const popularMovies = res[1].data
        const movieGenres =  res[2].data

        // console.log(movieGenres)


        setUpcoming(upcomingMovies.results)
        setPopular(popularMovies)
        setGenres(movieGenres)
    })
    .catch((err) =>{
        console.log(err)
    })
  };

  useEffect(() => {
    getData();
  }, []);

  const value = {
    upcoming: [upcoming, setUpcoming],
    popular: [popular, setPopular],
    genres: [genres, setGenres],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

// export default DataProvider;
