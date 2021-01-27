import React, { useContext } from "react";
import { DataContext } from "../../data/DataProvider";
import FavoriteList from "../MovieLists/FavoriteList";
import WatchList from "../MovieLists/WatchList";
import { Link } from "react-router-dom";
import "../../App.scss";

const Lists = () => {
  const value = useContext(DataContext);
  const [accountDetails] = value.accountDetails;

  const handleLogout = () => {
    localStorage.removeItem("session_id");
  };

  return (
    <section className="user-section">
      <div className="user-info">
        <p>{accountDetails.username}</p>
        <Link to="/login" onClick={handleLogout}>
          Logout
        </Link>
      </div>

      <div className="list-wrapper">
        <div className="title-section">
          <span></span>
          <h1>Favorite Movies </h1>
        </div>
        <div className="favorite-list">
          <FavoriteList />
        </div>

        <div className="watchlist">
          <div className="title-section">
            <span></span>
            <h1>Watchlist </h1>
          </div>
          <WatchList />
        </div>
      </div>
    </section>
  );
};

export default Lists;
