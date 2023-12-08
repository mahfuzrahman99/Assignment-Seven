/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Bookmarks = ({
  bookmarks,
  totalCreditHour,
  totalRemaning,
  totalCost,
}) => {
  return (
    <div className="md:w-1/3 bg-white p-6 rounded-xl">
      <h2 className="text-xl font-bold text-blue-600">
        Credit Hour Remaining : {totalRemaning}
      </h2>
      <hr />
      <h2 className="text-xl font-bold">Course Name:</h2>
      <ol className="text-sm font-medium text-[#1c1b1b99] list-decimal list-inside">
        {bookmarks.map((bookmark, index) => (
          <li key={index}>{bookmark.course_name}</li>
        ))}
      </ol>
      <hr />
      <p className="text-base font-medium text-[#1c1b1b99]">
        Total Credit Hour : {totalCreditHour}
      </p>
      <hr />
      <p className="text-base font-medium text-[#1c1b1b99]">
        Total Cost: ${totalCost}
      </p>
    </div>
  );
};

export default Bookmarks;
