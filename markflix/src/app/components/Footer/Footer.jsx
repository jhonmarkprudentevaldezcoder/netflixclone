import React from 'react';

export const Footer = () => {
  return (
    <div>
      <div className="bg-stone-950 text-white py-4 items-center text-center ">
        <p>
          &copy; copyright
          <span className="text-red-800 ">
            2023 - {new Date().getFullYear()}
          </span>
        </p>
      </div>
    </div>
  );
};
