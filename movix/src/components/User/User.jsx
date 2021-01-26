import React, {useEffect} from 'react'
import axios from 'axios'
import '../../App.scss'

const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;


const Lists = () => {
    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/account/{account_id}/favorite/movies?api_key=${API_KEY}&session_id=${localStorage.getItem(
              "session_id"
            )}&language=en-US&sort_by=created_at.asc&page=1`
          )
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

    return (
        <div>
            <h1>user page</h1>
        </div>
    )
}

export default Lists
