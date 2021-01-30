import React, { useEffect, useState, useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import axios from "axios";
import FilterContainer from "./FilterContainer";
import NothingFound from "./NothingFound";

import "../../App.css";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const SearchResults = (props) => {
  const value = useContext(DataContext);
  const [filterResults, setFilterResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber] = value.pageNumber;

  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${optionFilter}&vote_count.gte=100&page=${pageNumber}`
      )
      .then((res) => {
        setLoading(false);
        const response = res.data;
        setFilterResults(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genreId, optionFilter, pageNumber]);

  return (
    <>
      {!genreId ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <FilterContainer filterResults={filterResults} />
      )}
    </>
  );
};

export default SearchResults;
