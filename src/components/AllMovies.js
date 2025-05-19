'use client'

import { movieDB } from "@/database/movies";
import MovieCard from "./Moviecard";

export default AllMovies = () => {
    return(
        <>
        {movieDB.map((ele, index) => (
            <MovieCard
              key={index}
              moviePoster={ele.moviePoster}
              movieName={ele.movieName}
              movieReleaseYear={ele.movieReleaseYear}
              movieRating={ele.movieRating}
            />
          ))}
        </>
    )
}