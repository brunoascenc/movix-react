import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultsContainer from "./ResultsContainer";
import NothingFound from "./NothingFound";

import "../../App.css";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const SearchResults = (props) => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      )
      .then((res) => {
        setLoading(false);
        const response = res.data;
        setSearch(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);

  //loop to hide broken images
  let searchedMovie = [];
  for (let i in search) {
    if (search[i].poster_path) {
      searchedMovie.push(search[i]);
    }
  }

  return (
    <>
      {searchQuery === undefined ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <ResultsContainer search={searchedMovie} searchQuery={searchQuery} />
      )}
    </>
  );
};

export default SearchResults;
