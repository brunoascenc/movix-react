import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import { Link } from "react-router-dom";
// import SearchResults from "../SearchedMovies/SearchResults";
// import SearchActions from '../../actions/SearchActions'
import "../../App.css";
// import SearchActions from "../../actions/SearchActions";

const IMAGE_URL = process.env.REACT_APP_IMAGE_URL;

const PopularMovies = () => {
  const value = useContext(DataContext);
  const [popular] = value.popular;
  const [nextPage] = value.nextPageBtn;
  const [prevPage] = value.prevPageBtn;
  const [genres] = value.genres;
  const genreName = genres.genres;
  console.log(genreName)
  const popularMovie = popular.results;


  // handleGenres = genres => {

    // Cecks item's genre ids, compares them to genre list ids and returns genre names in a paragraph
    // if (genres) {
      // let genresArr = genreName.filter(genre => genre.id === popularMovie.genre_ids[0] || genre.id === popularMovie.genre_ids[1] ? genre.name : null);
      // console.log(genresArr[0].name)
      // return <p className="swiper-slide__genres">{genresArr[0] ? genresArr[0].name : ''}{genresArr[1] ? ` / ` + genresArr[1].name : ''}</p>
    // }
  // }

  return (
    <div className="container">
      <div className="title-section">
        <span></span>
        <h1>Popular Movies: </h1>
      </div>
      <div id="movies-container">
        {popularMovie &&
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
                    <div className="details-btn">
                      <button>Details</button>
                    </div>
                  </div>
                </Link>
                <span className="movie-title">{movie.title}</span>
                <span className="movie-genres">Action / Drama</span>
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
  );
};

export default PopularMovies;
