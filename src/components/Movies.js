import React from "react";
import { movies } from "../data";

function Movies() {
  const movie=movies.map((video)=>(
    <div>
      <h1>{video.title}</h1>
      <h3>{video.time}</h3>
      <ul>
        {video.genres.map((genre)=>(
          <li>{genre}</li>
        ))}
    </ul>
    </div>
    
  ))
  return(
    <div>
      <h1>Movies Page</h1>
      <div>
        {movie}
      </div>
  </div>
  )
}

export default Movies;
