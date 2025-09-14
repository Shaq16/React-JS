import React from 'react';
import { Link } from 'react-router-dom';

// Link stops reloading of pages
const Header = () => {
  return (
    <div className="py-7 px-10 bg-emerald-600 text-white flex justify-between items-center">
      <h2 className="text-2xl">Gym-Khana</h2>
      <div className="flex gap-10 text-xl underline">
        <Link to="/">Home</Link>
        <Link to="/Info">Info</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Projects">Projects</Link>
      </div>
    </div>
  );
};

export default Header;
