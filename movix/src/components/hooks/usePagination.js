import React, { useState, useRef } from "react";

const usePagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const scrollTop = useRef();

  function nextPage() {
    scrollTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setPageNumber(pageNumber + 1);
  }

  function prevPage() {
    if (pageNumber > 1) {
      scrollTop.current.scrollIntoView({ behavior: "smooth" });
      setPageNumber(pageNumber - 1);
    }
  }

  // const [pageNumber, setPageNumber] = useState(1);
  // const scrollTop = useRef();

  // const nextPage = () => {
  //   // scrollTop.current.scrollIntoView({ behavior: "smooth", block: "start" });
  //   setPageNumber(pageNumber + 1);
  // }

  // const prevPage = () => {
  //   if (pageNumber > 1) {
  //     // scrollTop.current.scrollIntoView({ behavior: "smooth" });
  //     setPageNumber(pageNumber - 1);
  //   }
  // }

  return [pageNumber, nextPage, prevPage, scrollTop];
};

export default usePagination;
