/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Card.js
import React from "react";

const Card = ({ card, handleAddNameToBookmarks }) => {
  const { img, course_name, details, price, credit_time } = card;

  return (
    <div className="space-y-2 card shadow-2xl rounded-xl p-3 pt-5 flex flex-col justify-between">
      <img className="rounded-xl" src={img} alt="" />
      <h2 className="text-xl font-semibold"> {course_name} </h2>
      <p className="text-sm font-normal text-[#1c1b1b99]"> {details} </p>
      <div className="flex justify-between items-end text-base font-medium text-[#1c1b1b99]">
        <p className="">
          <span className="text-2xl text-gray-700 font-semibold">$</span> price: {price}
        </p>
        <p>
          <svg
            className="inline"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
              stroke="#1C1B1B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Cradit: {credit_time}
        </p>
      </div>
      <button onClick={() => handleAddNameToBookmarks(card, credit_time,price)} className="text-xl font-semibold text-white bg-blue-600 w-full rounded-lg p-2">
        Select
      </button>
    </div>
  );
};

export default Card;
