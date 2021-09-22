import React from 'react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const PaginationContainer = styled.div`
  align-self: center;
  padding-top: 70px;
  padding-bottom: 100px;
  display: flex;
  align-items: center;
`;

const NumberButton = styled.button`
  background: ${(props) =>
    props.active === true ? props.theme.mainPurple : 'unset'};
  border: none;
  cursor: pointer;
  color: #cfc6c4;
  margin: 10px;
  padding: 4px 8px;
  border-radius: 4px;
  transition: 0.2s ease;
  display: ${(props) => (props.maxPages ? 'none' : 'unset')};
  pointer-events: ${(props) => (props.maxPages ? 'none' : 'unset')};
  font-size: 16px;
  border: solid 1px transparent;

  &:hover {
    border: solid 1px #252529;
  }

  @media (max-width: 530px) {
    margin: 5px;
  }

  @media (max-width: 395px) {
    display: none;
  }
`;

const Button = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  color: ${(props) =>
    props.lastPage || props.firstPage ? '#251f2b' : '#cfc6c4'};
  margin: 20px;
  font-size: 15px;
  pointer-events: ${(props) =>
    props.lastPage || props.firstPage ? 'none' : 'unset'};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  border: solid 1px transparent;
  transition: 0.2s ease;

  @media (max-width: 530px) {
    margin: 5px;
  }

  @media (max-width: 395px) {
    margin: 10px;
  }

  &:hover {
    border: solid 1px #252529;
  }

  .next-icon {
    font-size: 19px;
    margin-top: 2px;
    margin-left: 3px;
  }
  .prev-icon {
    font-size: 19px;
    margin-top: 1px;
    margin-right: 3px;
  }
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
        <MdKeyboardArrowLeft className="prev-icon" /> Previous
      </Button>
      {getPaginationGroup().map((page, index) => (
        <Link
          to="movies-component"
          // delay={10}
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
        Next <MdKeyboardArrowRight className="next-icon" />
      </Button>
    </PaginationContainer>
  );
};

export default Pagination;
