import React, { useContext } from 'react'
import { DataContext } from "../../data/DataProvider";
import { Link } from "react-router-dom";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const FilterContainer = ({filterResults}) => {
  const value = useContext(DataContext);
  const [nextPage] = value.nextPageBtn;
  const [prevPage] = value.prevPageBtn;

    return (
        <div className="search-results">
        <div className="container">
          <div className="title-section">
            <span></span>
            <h1>
              You searched for
            </h1>
          </div>
          <div id="movies-container">
            {filterResults &&
              filterResults.map((movie) => {
                return (
                  <div key={movie.id} className="movie-item">
                    <Link to={`/details/${movie.id}`}>
                      <div className="img-container">
                        <img
                          // onError={handleImgErr}
                          className="movie-poster"
                          src={IMAGE_URL + movie.poster_path}
                          alt={IMAGE_URL}
                          data-movie-id={movie.id}
                        />
                        <div className="details-btn">
                          <button>Details</button>
                        </div>
                      </div>
                    </Link>
                    <span className="movie-title">{movie.title}</span>
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
    )
}

export default FilterContainer
