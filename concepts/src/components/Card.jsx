import React from 'react';

const Card = ({ userName, userCity, userId,userProf}) => {

  return (
    <>
      <div className="bg-black text-white rounded w-64 h-64 flex justify-center items-end p-4">
        <div className="text-center">
          <h1>Name:{userName}</h1>
          <h1>Id:{userId}</h1>
          <h1>City: {userCity}</h1>
          <h1>Profession:{userProf}</h1>
          <button className="mt-2 px-4 py-1 bg-white text-black rounded">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Card;
