import { useState, useRef } from 'react';

const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const scrollTop = useRef();

  function nextPage() {
    setPageNumber(pageNumber + 1);
    window.scrollTo(0, 0);
  }

  function prevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      window.scrollTo(0, 0);
    }
  }

  return [pageNumber, nextPage, prevPage, scrollTop];
};

export default usePagination;
