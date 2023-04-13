import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className="px-5 py-10 md:flex  flex-col bg-stone-900">
      <div className="container  md:w-1/2 lg:w-1/3 ">
        <div className="p-4 text-white">
          <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl ">
            Movies
          </h2>
          <p className="mt-2 md:mt-4 font-semibold text-base">
            Movies move us like nothing else can, whether they’re scary, funny,
            dramatic, romantic or anywhere in-between. So many titles, so much
            to experience.
          </p>
        </div>
      </div>

      <div className="py-10">
        <ul className="flex">
          <li>
            <Link
              className="text-2xl text-gray-500 px-4 hover:text-gray-400 transition ease-in-out delay-75 duration-300"
              href="#"
            >
              TRENDING
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl text-gray-500 px-4 hover:text-gray-400 transition ease-in-out delay-75 duration-300"
              href="About"
            >
              ABOUT
            </Link>
          </li>
        </ul>

        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols- 2xl:grid-cols-6 mx-auto py-4">
          <p>THIS IS ABOUT MY WEBSITE</p>
        </div>
      </div>
    </div>
  );
};

export default page;
