import React from "react";
import Filters from "./Filters";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-elements">
        <div className="search-container">
          <Link to="/">
            <h1>Movix</h1>
          </Link>
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
            <Filters />
          </div>
        </form>

        <div className="burger nav">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>

        </div>
      </header>
    </>
  );
}
