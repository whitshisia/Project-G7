import React from 'react';

const Display = ({ food, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-800" onClick={onClose}>Close</button>
        <img src={food.image} alt={food.name} className="w-full mb-4" />
        <h2 className="text-xl font-bold mb-2">{food.name}</h2>
        <p>{food.description}</p>
        <p>Price: ${food.price}</p>
        <p>Ingredients: {food.ingredients}</p>
      </div>
    </div>
  );
};

export default Display;
