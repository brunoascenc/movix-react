import React, { useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import ModalVideo from 'react-modal-video';
import { Modal, PlayButton } from './MovieTrailerStyles';

const MovieTrailer = ({ movieTrailer }) => {
  const [isOpen, setOpen] = useState(false);
  let officialTrailers = [];

  movieTrailer &&
    movieTrailer.map((trailer) => {
      return trailer.type === 'Trailer' ? officialTrailers.push(trailer) : null;
    });

  const trailer = officialTrailers[0];

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
