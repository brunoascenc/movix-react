import React from "react";

const FilterSelect = () => {
  return (
    <select name="popular" id="filter-movie">
      <option value="popularity.desc">Popularity</option>
      <option value="revenue.desc">Revenue</option>
      <option value="vote_count.desc">Most voted</option>
      <option value="vote_average.desc">Top Rated</option>
      <option value="primary_release_date.desc">Release Date</option>
    </select>
  );
};

export default FilterSelect;
