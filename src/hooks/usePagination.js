import { useState, useRef } from 'react';
import { scroller } from 'react-scroll';

const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const scrollTop = useRef();

  const scrollToComponent = () => {
    scroller.scrollTo('movies-component', {
      duration: 800,
      smooth: 'easeInOutQuart',
      offset: -35,
    });
  };

  function nextPage() {
    setPageNumber(pageNumber + 1);
    setNumberOfPages(numberOfPages + 1);
    scrollToComponent();
    // window.scrollTo(0, 0);
  }

  function prevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      setNumberOfPages(numberOfPages - 1);
      scrollToComponent();
    }
  }

  return [pageNumber, nextPage, prevPage, scrollTop, numberOfPages];
};

export default usePagination;
