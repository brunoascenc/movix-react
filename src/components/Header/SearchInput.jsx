import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Input, SearchButton, InputContainer } from './HeaderStyles';
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

const SearchInput = () => {
  const [movieName, setMovieName] = useState('');
  const location = useLocation();
  const history = useHistory();

  const scrollToComponent = () => {
    setTimeout(function () {
      scroller.scrollTo('movies-component', {
        duration: 800,
        smooth: 'easeInOutQuart',
        offset: -35,
      });
    }, 10);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      scrollToComponent();
      history.push(`/search=${movieName}`);
    }
  };

  return (
    <InputContainer>
      <Input
        onKeyPress={handleKeyPress}
        type="text"
        id="searchInput"
        placeholder="Movie name..."
        onChange={(e) => setMovieName(e.target.value)}
        pageRoute={location.pathname}
      />
      <NavLink to={`/search=${movieName}`}>
        <SearchButton id="search" type="submit" onClick={scrollToComponent}>
          <i className="fas fa-search"></i>
        </SearchButton>
      </NavLink>
    </InputContainer>
  );
};

export default SearchInput;
