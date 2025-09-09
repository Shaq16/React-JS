import React from 'react';

const Card = ({ userName, userCity, userId, userProf, userImg }) => {
  return (
    <div className="bg-black text-white rounded w-64 h-auto flex flex-col items-center p-4 shadow-lg">
      <img
        className="h-20 w-20 rounded-full bg-white object-cover mb-4"
        src={userImg}
      />
      <div className="text-center space-y-1">
        <h1>Name: {userName}</h1>
        <h1>Id: {userId}</h1>
        <h1>City: {userCity}</h1>
        <h1>Profession: {userProf}</h1>
      </div>
      <button className="mt-4 px-4 py-1 bg-white text-black rounded">
        Submit
      </button>
    </div>
  );
};

export default Card;
