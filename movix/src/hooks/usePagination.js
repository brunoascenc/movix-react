import { useState, useRef } from 'react';

const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const scrollTop = useRef();

  function nextPage() {
    setPageNumber(pageNumber + 1);
    window.scrollTo(0, 0);
    // setTimeout(() => {
    //   scrollTop.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // }, 1000);
  }

  function prevPage() {
    if (pageNumber > 1) {
      // scrollTop.current.scrollIntoView({ behavior: 'smooth' });
      setPageNumber(pageNumber - 1);
      window.scrollTo(0, 0);
    }
  }

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [nextPage, prevPage]);

  return [pageNumber, nextPage, prevPage, scrollTop];
};

export default usePagination;
