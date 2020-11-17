import React from 'react'
import HomeLanding from './HomeLanding'
import '../App.css'

export default function Header() {
    return (
        <div id ="landing-page">
            <header>
            <div className="search-container">
                    <a href="/#">
                        <h1>Movix</h1>
                    </a>
                    <input type="text" id="searchInput" placeholder="Search movie"/>
                    <button id="search" type="submit"><i className="fas fa-search"></i></button>
                </div>
                <form data-scroll-header>
                    <div className="close-nav">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    <div className="filter-options">
                        <span>Order By:</span>
                        <select name="genres" id="select-genre">
                        </select>

                        <select name="popular" id="filter-movie">
                            <option value="popularity.desc">Popularity</option>
                            <option value="revenue.desc">Revenue</option>
                            <option value="vote_count.desc">Most voted</option>
                            <option value="vote_average.desc">Top Rated</option>
                            <option value="primary_release_date.desc">Release Date</option>
                        </select>

                        <a className="filter-btn" href="/#">Search</a>
                    </div>
                </form>

                <div className="burger nav">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

            </header>
            <HomeLanding/>
        </div>
    )
}
