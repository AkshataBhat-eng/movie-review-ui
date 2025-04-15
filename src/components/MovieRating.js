"use client"
import { useState } from 'react';

const MovieRating = ({
  maxStars = 5,
  initialRating = 0
}) => {
  const [rating, setRating] = useState(initialRating);

  const renderStar = (index) => {
    const current = rating;
    let fillPercent = 0;

    if (current >= index) {
      fillPercent = 100;
    } else if (current >= index - 0.5) {
      fillPercent = 50;
    }

    return (
      <span
        key={index}
        className="text-3xl relative inline-block"
      >
        <span className="text-gray-300">★</span>
        <span
          className="absolute top-0 left-0 overflow-hidden text-yellow-400"
          style={{ width: `${fillPercent}%` }}
        >
          ★
        </span>
      </span>
    );
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, i) => renderStar(i + 1))}
    </div>
  );
};

export default MovieRating;
