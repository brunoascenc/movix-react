import React, { createContext, useState, useEffect, useRef } from "react";
import axios from "axios";

export const DataContext = createContext();

//API Key
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const DataProvider = (props) => {
  const [upcoming, setUpcoming] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const scrollTop = useRef();

  function nextPage() {
    scrollTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setPageNumber(pageNumber + 1);
  }

  function prevPage() {
    if (pageNumber > 1) {
      scrollTop.current.scrollIntoView({ behavior: "smooth" });
      setPageNumber(pageNumber - 1);
    }
  }

  useEffect(() => {
    setLoading(true);
    axios
      .all([
        axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=US`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${pageNumber}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
        ),
      ])
      .then((res) => {
        setLoading(false);
        const upcomingMovies = res[0].data;
        const popularMovies = res[1].data;
        const movieGenres = res[2].data;
        const nowPlaying = res[3].data;

        setUpcoming(upcomingMovies.results);
        setPopular(popularMovies);
        setGenres(movieGenres);
        setNowPlaying(nowPlaying.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  const value = {
    upcoming: [upcoming, setUpcoming],
    popular: [popular, setPopular],
    nowPlaying: [nowPlaying],
    genres: [genres, setGenres],
    nextPageBtn: [nextPage],
    prevPageBtn: [prevPage],
    pageNumber: [pageNumber],
    loading: [loading],
    scrollTop: [scrollTop],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
