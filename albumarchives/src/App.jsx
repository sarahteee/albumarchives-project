import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AlbumList from './components/AlbumList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [searchKey, setSearchKey] = useState('');

  const handleSearch = (key) => {
    setSearchKey(key);
  };

  return (
    <div className="App">
      <Header />
      <Hero onSearch={handleSearch} />
      <main>
        <AlbumList searchKey={searchKey} />
      </main>
      <Footer />
    </div>
  );
};

export default App;

