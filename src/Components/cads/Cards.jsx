/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Cards.js
import React, { useEffect, useState } from "react";
import Card from "../card/Card";

const Cards = ({ handleAddNameToBookmarks }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="md:w-2/3">
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card, idx) => (
          <Card
            key={idx}
            handleAddNameToBookmarks={handleAddNameToBookmarks}
            card={card}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default Cards;
