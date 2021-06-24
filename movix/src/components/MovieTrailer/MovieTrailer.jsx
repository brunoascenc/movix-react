import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieTrailer } from '../../redux/movie-trailer/getMovieTrailer';

const MovieTrailer = ({ movieId }) => {
  const [isOpen, setOpen] = useState(false);
  const movieTrailer = useSelector((state) => state.movieTrailer.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieTrailer(movieId));
  }, [movieId, dispatch]);

  return (
    <>
      {movieTrailer === undefined ? (
        ''
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
