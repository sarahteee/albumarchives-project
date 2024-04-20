import React, { useState } from 'react';
import './Hero.css';
import heroImage from '../assets/Thumbnail.png';

const Hero = ({ onSearch }) => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleSearchSubmit = () => {
    onSearch(searchKey);
  };

  return (
    <div className="hero">
      <img src={heroImage} alt="Musician illustrations" className="hero-image" />
      <div className="hero-content">
        <h1>Explore the most iconic albums in history</h1>
        <div className="search-bar">
          <input type="text" value={searchKey} onChange={handleSearchChange} placeholder="Search albums" />
          <button type="button" onClick={handleSearchSubmit}>SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
