import React from "react";
import { directors } from "../data";

function Directors() {

  const DirectorsList=directors.map((director)=>(
      <div key={director.name}>
        <h1>{director.name}</h1>
        <ul>
          {director.movies.map((movie)=>(
            <li>{movie}</li>
          ))}
        </ul>
        <h3>{director.movies}</h3>
      </div>

  ))
  
  return <div>
    <h1>Directors Page</h1>
    {DirectorsList}
  </div>;
}

export default Directors;
