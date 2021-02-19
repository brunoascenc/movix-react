import React, { useEffect, useState } from "react";
import useGenres from "../../hooks/useGenres";
import NothingFound from "../NothingFound";
import FullPageLoader from "../../FullPageLoader/FullPageLoader";
import usePagination from "../../hooks/usePagination";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilterResults } from "../../../actions/getFilterResults";
import { Link } from "react-router-dom";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const SearchResults = (props) => {
  const [genreName] = useGenres();
  const [loading] = useState(false);
  const [pageNumber, nextPage, prevPage, scrollTop] = usePagination();
  const genreId = props.match.params.pathname;
  const optionFilter = props.match.params.pathname2;
  const filter = useSelector((state) => state.filterResults.results);
  const filterResults = filter.results;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilterResults(genreId, optionFilter, pageNumber));
  }, [pageNumber, genreId, optionFilter, dispatch]);

  return (
    <>
      {!genreId ? (
        <NothingFound />
      ) : loading ? (
        <FullPageLoader />
      ) : (
        <div className="search-results" ref={scrollTop}>
          <div className="container">
            <div className="title-section">
              <span></span>
              <h1>You searched for</h1>
            </div>
            <div id="movies-container">
              {filterResults &&
                filterResults.map((movie) => {
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
                })}
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
        </div>
      )}
    </>
  );
};

export default SearchResults;
