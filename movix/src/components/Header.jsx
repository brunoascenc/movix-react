import React from "react";
import HomeLanding from "./HomeLanding";
import GenreSelect from "./HeaderElements/GenreSelect";
import FilterSelect from "./HeaderElements/FilterSelect";
import SearchInput from "./HeaderElements/SearchInput";
import "../App.css";

export default function Header() {
  return (
    <div id="landing-page">
      <header>
        <div className="search-container">
          <a href="/#">
            <h1>Movix</h1>
          </a>
          <SearchInput />
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
      <HomeLanding />
    </div>
  );
}
