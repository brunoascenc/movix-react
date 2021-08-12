import React, { useState, useEffect } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import ModalVideo from 'react-modal-video';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovieTrailer } from '../../redux/movie-trailer/movieTrailerActions';
import { Modal, PlayButton } from './MovieTrailerStyles';

const MovieTrailer = ({ movieId }) => {
  const [isOpen, setOpen] = useState(false);
  const movieTrailer = useSelector((state) => state.movieTrailer.results);
  let officialTrailers = [];

  movieTrailer.map((trailer) => {
    return trailer.type === 'Trailer' ? officialTrailers.push(trailer) : null;
  });

  const trailer = officialTrailers[0];
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
              videoId={trailer && trailer.key}
              onClose={() => setOpen(false)}
            />
          </Modal>
          <PlayButton onClick={() => setOpen(true)}>
            <BsPlayFill />
          </PlayButton>
        </>
      )}
    </>
  );
};

export default MovieTrailer;
