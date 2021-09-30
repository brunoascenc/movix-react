import React, { useState } from 'react';
import { BsPlay } from 'react-icons/bs';
import ModalVideo from 'react-modal-video';
import { Modal, PlayButton } from './MovieDetailsStyles';
import 'react-modal-video/scss/modal-video.scss';

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
            {/* <BsPlayFill /> */}
            <BsPlay className="trailer-icon" />
            Play Trailer
          </PlayButton>
        </>
      )}
    </>
  );
};

export default MovieTrailer;
