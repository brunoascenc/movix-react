import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
// import usePagination from '../../hooks/usePagination';

const PaginationContainer = styled.div`
  align-self: center;
  margin-top: 77px;
  display: flex;
  align-items: center;
`;

const NumberButton = styled.button`
  background: ${(props) =>
    props.active === true ? props.theme.mainPurple : 'unset'};
  border: none;
  cursor: pointer;
  color: #ffffff;
  margin: 15px;
  padding: 4px 8px;
  border-radius: 4px;
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: #ffffff;
  margin: 20px;
  font-size: 30px;
  margin-top: 25px;
`;

const Pagination = ({
  pages,
  pageNumber,
  nextPage,
  prevPage,
  setPageNumber,
}) => {
  let pageLimit = 5;
  const getPaginationGroup = () => {
    let start = Math.floor((pageNumber - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <PaginationContainer>
      <Button onClick={prevPage}>
        <MdKeyboardArrowLeft className="pagination-btn" />
      </Button>
      {getPaginationGroup().map((page, index) => (
        <NumberButton
          key={index}
          onClick={() => setPageNumber(page)}
          active={pageNumber === page ? true : false}
        >
          <span>{page > pages ? null : page}</span>
        </NumberButton>
      ))}
      <Button onClick={nextPage}>
        <MdKeyboardArrowRight className="pagination-btn" />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
