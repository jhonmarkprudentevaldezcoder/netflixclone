import Link from 'next/link';
import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';

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
        <div className="py-5 ">
          <h2 className="text-amber-600 px-1 py-1">
            {result.title || result.name}
          </h2>
          <p className="line-clamp-3 text-md text-gray-300">
            {result.overview}
          </p>
          <div className="flex flex-row items-center justify-between mx-2">
            {' '}
            <p className="text-md text-teal-600 font-semibold mt-1">
              {result.release_date || result.first_air_date}
            </p>
            <p className="flex gap-4 items-center text-green-500 mt-1">
              <FiThumbsUp /> {result.vote_count}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};
