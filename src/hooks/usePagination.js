import { useState } from 'react';
import { scroller } from 'react-scroll';

const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const scrollToComponent = () => {
    scroller.scrollTo('movies-component', {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -35,
    });
  };

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
    scrollToComponent();
    // window.scrollTo(0, 0);
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      scrollToComponent();
    }
  };

  return [pageNumber, nextPage, prevPage, setPageNumber];
};

export default usePagination;
