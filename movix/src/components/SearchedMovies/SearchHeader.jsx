import React from 'react'
import GenreSelect from "../HomeHeader/GenreSelect";
import FilterSelect from "../HomeHeader/FilterSelect";
import SearchInput from "../HomeHeader/SearchInput";
import "../../App.css";

const SearchHeader = () => {
    return (
        <div className="search-header">
        <header>
          <div className="search-container">
            <a href="/#">
              <h1>Movix</h1>
            </a>
            <SearchInput/>
          </div>
          <form data-scroll-header>
            <div className="close-nav">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
            <div className="filter-options">
              <span>Order By:</span>
              <GenreSelect />
              <FilterSelect />
              <a className="filter-btn" href="/#">
                Search
              </a>
            </div>
          </form>
  
          <div className="burger nav">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </header>
        {/* <HomeLanding /> */}
      </div>
    )
}

export default SearchHeader
