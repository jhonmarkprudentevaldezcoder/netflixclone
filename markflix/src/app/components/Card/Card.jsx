import Link from 'next/link';
import React from 'react';

export const Card = ({ result }) => {
  return (
    <div className="cursor-pointer sm:p-1 sm:hover:shadow-red-800 sm:shadow-md    sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${result.id}`}>
        <img
          alt="movie image"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          className="hover:opacity-80 transition-opacity duration-200"
        />
        <div>
          <h2>{result.title}</h2>
          <p className="line-clamp-3 text-md text-gray-300">
            {result.overview}
          </p>
        </div>
      </Link>
    </div>
  );
};
