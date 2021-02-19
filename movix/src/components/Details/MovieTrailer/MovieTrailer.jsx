import React, { useState, useEffect } from "react";
// import axios from "axios";
import ModalVideo from "react-modal-video";

import {useSelector, useDispatch} from 'react-redux'
import {fetchMovieTrailer} from '../../../actions/getMovieTrailer'
// import "../../App.scss";

// const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

const MovieTrailer = ({ movieId }) => {
  // const [movieTrailer, setMovieTrailer] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const movieTrailer = useSelector(state => state.movieTrailer.results)
  // const movieTrailer = trailer.results
  const dispatch = useDispatch()

  // console.log(trailer)

  useEffect(() => {
    dispatch(fetchMovieTrailer(movieId))
  },[movieId, dispatch])

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
  //     )
  //     .then((res) => {
  //       const response = res.data;
  //       setMovieTrailer(response.results[0]);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [movieId]);

  return (
    <>
      {movieTrailer === undefined ? (
        ""
      ) : (
        <>
       <div className="movie-video">
        <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={movieTrailer.key}
            onClose={() => setOpen(false)}
          />
        </div>
          <button className="modal-btn" onClick={() => setOpen(true)}>
            <i className="far fa-play-circle"></i>
          </button>
        </>
      )}
    </>
  );
};

export default MovieTrailer;
