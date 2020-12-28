import { useState, useEffect} from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const SearchActions = () => {
  const [search, setSearch] = useState([]);
  const [movieName, setMovieName] = useState("");

  //  Searrch data
  const getSearch = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=harry`
      )
      .then((res) => {
        const response = res.data;
        console.log(response);
        setSearch(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  // useEffect(() => {
  //   getSearch()
  // }, []);

  return [getSearch, setMovieName, search];
};

export default SearchActions;
