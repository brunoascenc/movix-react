import React, { useContext, useEffect } from "react";
import { DataContext } from "../../../data/DataProvider";
import {useSelector, useDispatch} from 'react-redux'
import {fetchPopularMovies} from '../../../actions/getPopularMovies'
import { Link } from "react-router-dom";
import useGenres from '../../hooks/useGenres'
// import usePagination from '../../hooks/usePagination'
import FullPageLoader from "../../FullPageLoader/FullPageLoader";
// import "../../App.css";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const PopularMovies = () => {
  const value = useContext(DataContext);
  // const [genreName] = GenreList();
  const [genreName] = useGenres();
  const [scrollTop] = value.scrollTop;
  const [loading] = value.loading;
  // const [popular] = value.popular;
  const [nextPage] = value.nextPageBtn;
  const [prevPage] = value.prevPageBtn;
  const [pageNumber] = value.pageNumber;
  // const popularMovie = popular.results;


  const popularMovies = useSelector(state => state.popularMovie.results)
  const popularMovie = popularMovies.results;
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchPopularMovies(pageNumber))
  },[pageNumber, dispatch])



  return (
    <div className="container" ref={scrollTop}>
      <div className="title-section">
        <span></span>
        <h1>Popular Movies </h1>
      </div>
      <div id="movies-container">
        {loading ? (
          <FullPageLoader />
        ) : (
          popularMovie &&
          popularMovie.map((movie) => {
            return (
              <div key={movie.id} className="movie-item">
                <Link to={`/details/${movie.id}`}>
                  <div className="img-container">
                    <img
                      className="movie-poster"
                      src={IMAGE_URL + movie.poster_path}
                      alt={IMAGE_URL}
                      data-movie-id={movie.id}
                    />
                  </div>
                </Link>
                <span className="movie-title">{movie.title}</span>
                <span className="movie-genres">{genreName(movie)}</span>
                <div className="movie-rating">
                  <i className="far fa-star"></i>
                  <p>{movie.vote_average}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="pagination-btn">
        <button onClick={prevPage} className="filter-prev">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextPage} className="filter-next">
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PopularMovies;
