import React, { useEffect, useState } from "react";
import axios from "axios";
import ResultsContainer from "./ResultsContainer";
import NothingFound from "./NothingFound";
import Header from "../Header/Header";

import "../../App.css";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const SearchResults = (props) => {
  const [search, setSearch] = useState([]);
  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
      )
      .then((res) => {
        const response = res.data;
        setSearch(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchQuery]);


  return (
    <>
      <Header />
      {searchQuery === undefined ? (
        <NothingFound />
      ) : (
        <ResultsContainer search={search} searchQuery={searchQuery} />
      )}
    </>
  );
};

export default SearchResults;
