import axios from 'axios';
import FilterActionTypes from './filterMovieTypes';

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const fetchFilterRequest = () => {
  return {
    type: FilterActionTypes.FETCH_FILTER_START,
  };
};

export const fecthFilterSuccess = (movies) => {
  return {
    type: FilterActionTypes.FETCH_FILTER_SUCCESS,
    payload: movies,
  };
};

export const fetchFilterFailure = (error) => {
  return {
    type: FilterActionTypes.FETCH_FILTER_FAILURE,
    payload: error,
  };
};

export const fetchFilterResults = (
  genreId,
  optionFilter,
  pageNumber,
  setData
) => {
  return (dispatch) => {
    dispatch(fetchFilterRequest());
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=${optionFilter}&vote_count.gte=100&page=${pageNumber}`
      )
      .then((res) => {
        const filterResults = res.data;
        setData((prev) => [...prev, ...filterResults.results]);
        dispatch(fecthFilterSuccess(filterResults));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(fetchFilterFailure(error));
      });
  };
};
