import React, { createContext, useState, useEffect } from "react";
import axios from "axios";


export const DataContext = createContext();

//API Key
const API_KEY = process.env.REACT_APP_MOVIEDB_KEY;

export const DataProvider = (props) => {
  const [sessionId, setSessionId] = useState('')


  const url = new URL(window.location);
  const tokenApproved = url.searchParams.get("approved");
  const token = url.searchParams.get("request_token")

  useEffect(() => {
    
    if(tokenApproved){
      fetch(
        ` https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
        {
          method: "POST",
          body: JSON.stringify({ request_token: `${token}` }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((res) => {
          const sessionId = res.session_id
          localStorage.setItem("session_id", sessionId);
          setSessionId(sessionId)
        });
  }
  },[])

  const value = {
    sessionId: [sessionId]
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
