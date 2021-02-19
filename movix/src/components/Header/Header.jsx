import React, { useState } from "react";
import Filters from "./Filters/Filters";
import SearchInput from "./Search/SearchInput";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <form className={click ? "nav-active" : null} data-scroll-header>
            <div className="filter-options">
              <span>Order By:</span>
              <Filters closeMenu={closeMobileMenu} />
            </div>
          </form>

          <div
            className={click ? "close-nav" : "burger nav"}
            onClick={handleClick}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </header>
    </>
  );
}
