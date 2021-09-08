import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import { Link } from 'react-scroll';

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
  color: ${(props) =>
    props.active === true ? '#f2eeed' : props.theme.textColor};
  margin: 15px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: 0.1s ease;
  display: ${(props) => (props.maxPages ? 'none' : 'unset')};
  pointer-events: ${(props) => (props.maxPages ? 'none' : 'unset')};

  &:hover {
    color: #f2eeed;
  }
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: ${(props) =>
    props.lastPage || props.firstPage ? '#251f2b' : '#f2eeed'};
  margin: 20px;
  font-size: 40px;
  margin-top: 30px;
  pointer-events: ${(props) =>
    props.lastPage || props.firstPage ? 'none' : 'unset'};
`;

const Pagination = ({
  pages,
  pageNumber,
  nextPage,
  prevPage,
  setPageNumber,
}) => {
  let pageLimit = pages < 5 ? pages : 5;
  const getPaginationGroup = () => {
    let start = Math.floor((pageNumber - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <PaginationContainer>
      <Button onClick={prevPage} firstPage={pageNumber === 1 ? true : false}>
        <MdKeyboardArrowLeft className="pagination-btn" />
      </Button>
      {getPaginationGroup().map((page, index) => (
        <Link
          to="movies-component"
          delay={10}
          smooth={true}
          offset={-35}
          duration={800}
          key={index}
        >
          <NumberButton
            key={index}
            onClick={() => setPageNumber(page)}
            active={pageNumber === page ? true : false}
            maxPages={page <= pages ? false : true}
          >
            <span>{page}</span>
          </NumberButton>
        </Link>
      ))}
      <Button onClick={nextPage} lastPage={pageNumber === pages ? true : false}>
        <MdKeyboardArrowRight className="pagination-btn" />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
