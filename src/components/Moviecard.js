"use client";
import { useState } from "react";
import { AddRating } from "./AddRating";
import MovieRating from "./MovieRating";

const MovieCard = (props) => {

  const [rating, setRating] = useState(0);
  const movie = [
    {
      movieName: "Inception",
      moviePoster: "/assets/images/inception.jpg",
      movieReleaseYear: { date: "16 July", year: 2010 },
      rating: 4,
    },
  ];

  const addRating = (rating) => {    
    setRating(rating)
  }
  return (
    <div className="flex flex-col justify-stretch">
      <div className="movie-card-wrapper h-[500px] w-[300px] rounded-[8px] my-[20px]">
        <div className="movie-card-container w-full h-full object-cover flex flex-col relative">
          <img
            src={props.moviePoster}
            alt="poster"
            className="h-full w-full rounded-[8px]"
          />
          <div className="movie-details rounded-[8px] p-4 w-full h-full flex flex-col justify-end absolute bottom-0 left-0 opacity-0 hover:opacity-100 transition-all duration-500 easi-in">
            <h3 className="text-[#808080] font-semibold text-xl">
              {props.movieName}
            </h3>
            <p className="text-[#808080] font-medium text-lg">
              Released on {props.movieReleaseYear?.date},{" "}
              {props.movieReleaseYear?.year}
            </p>
            <div className="rating">
              <MovieRating initialRating={rating}/>
            </div>
          </div>
        </div>
      </div>
      <div className="add-rating mt-[10px]">
        <AddRating handleAddRating={addRating} />
      </div>
    </div>
  );
};

export default MovieCard;
