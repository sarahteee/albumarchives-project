import React, { useState, useEffect } from 'react';
import './AlbumList.css';

export default function AlbumList({ searchKey }) {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  useEffect(() => {
    const getAlbums = async () => {
      let response = await fetch("http://localhost:4000/api/albums");
      let data = await response.json();
      setAlbums(data);
      setFilteredAlbums(data);
    };
    getAlbums();
  }, []);

  useEffect(() => {
    const lowercasedSearchKey = searchKey.toLowerCase();
    const filtered = albums.filter(
      (album) =>
        album.title.toLowerCase().includes(lowercasedSearchKey) ||
        album.artist.toLowerCase().includes(lowercasedSearchKey) ||
        album.genre.toLowerCase().includes(lowercasedSearchKey)
    );
    setFilteredAlbums(filtered);
  }, [searchKey, albums]);

  return (
    <div className="album-container">
      {filteredAlbums.map((album) => (
        <div key={album._id} className="album">
          <div className="album-artwork">
            <img src={album.imageUrl} alt={album.title} />
          </div>
          <h1 className="album-title">{album.title}</h1>
          <p className="album-artist">{album.artist}</p>
          <p className="album-genre">{album.genre}</p>
        </div>
      ))}
    </div>
  );
}
