import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

//API Key
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY


export const DataProvider = (props) => {
  const [upcoming, setUpcoming] = useState([])
  const [popular, setPopular] = useState([])
  const [genres, setGenres] = useState([])
  const [search, setSearch] = useState([])
  const [movies, setMovie] = useState('')
  const [movieName, setMovieName] = useState('')

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


        setUpcoming(upcomingMovies.results)
        setPopular(popularMovies)
        setGenres(movieGenres)
    })
    .catch((err) =>{
        console.log(err)
    })
  };

  // Searrch data
  const getSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movieName}`
      )
      .then((res) => {
        const response = res.data;
        setSearch(response)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getSearch()
  }, [movieName])

  const handleSearch = (e) => {
    // e.preventDefault()
    setMovie(e.target.value)
    // console.log(e.target.value)
  }

  const handleXd = () => {
    setMovieName(movies)
  }

  console.log(search)

  useEffect(() => {
    getData();
  }, []);

  const value = {
    upcoming: [upcoming, setUpcoming],
    popular: [popular, setPopular],
    genres: [genres, setGenres],
    searched:[search, setSearch],
    movieName: [handleSearch],
    xd: [handleXd]

  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};

// export default DataProvider;
