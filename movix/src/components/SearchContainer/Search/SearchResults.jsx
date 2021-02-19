import React, { useEffect } from "react";
import ResultsContainer from "./ResultsContainer";
import NothingFound from "../NothingFound";
// import FullPageLoader from "../../FullPageLoader/FullPageLoader";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchResults } from "../../../actions/getSearchResults";

const SearchResults = (props) => {
  // const [loading] = useState(false);
  const searchResults = useSelector((state) => state.searchResults.results);
  const loading = useSelector((state) => state.searchResults.loading);
  const search = searchResults.results;
  const dispatch = useDispatch();

  // console.log(loading)

  const searchQuery = props.match.params.pathname;

  useEffect(() => {
    dispatch(fetchSearchResults(searchQuery));
  }, [searchQuery, dispatch]);

  //loop to hide broken images
  let searchedMovie = [];
  for (let i in search) {
    if (search[i].poster_path) {
      searchedMovie.push(search[i]);
    }
  }

  return (
    <>
      {searchQuery === undefined ? (
        <NothingFound />
      ) : loading.true ? (
        console.log('oi')
      ) : (
        <ResultsContainer search={searchedMovie} searchQuery={searchQuery} />
      )}
    </>
  );
};

export default SearchResults;
