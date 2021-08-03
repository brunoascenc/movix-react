import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieTrailer } from '../../redux/movie-trailer/movieTrailerActions';
import { BsPlay } from 'react-icons/bs';
import { Modal, PlayButton } from './MovieTrailerStyles';

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
          <Modal>
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={movieTrailer.key}
              onClose={() => setOpen(false)}
            />
          </Modal>
          <PlayButton onClick={() => setOpen(true)}>
            <BsPlay />
          </PlayButton>
        </>
      )}
    </>
  );
};

export default MovieTrailer;
