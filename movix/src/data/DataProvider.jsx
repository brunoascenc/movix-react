import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

//API Key
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY


export const DataProvider = (props) => {
  const [upcoming, setUpcoming] = useState([])
  const [popular, setPopular] = useState([])
  const [genres, setGenres] = useState([])
  // const [detail, setDetail] = useState([])
  // const [detailId, setDetailId] = useState()
  // console.log(props.match.params.id)

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
      // axios.get(
      //   `https://api.themoviedb.org/3/movie/${detailId}?api_key=${API_KEY}`
      // )
    ])
    .then((res) => {
        const upcomingMovies = res[0].data
        const popularMovies = res[1].data
        const movieGenres =  res[2].data

        setUpcoming(upcomingMovies)
        setPopular(popularMovies)
        setGenres(movieGenres)
    })
    .catch((err) =>{
        console.log(err)
    })
  };

  // useEffect(() => {
  //   axios.get(
  //     `https://api.themoviedb.org/3/movie/${detailId}?api_key=${API_KEY}`
  //   )
  //   .then((res) => {
  //     setDetail(res)
  //     console.log(res)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })

  // },[setDetailId, detail])

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
