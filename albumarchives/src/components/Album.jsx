import React from 'react';
import './Album.css';
import AlbumList from "./AlbumList";

export default function Album(props) {
  return (
    <div className="album">
      <img src={props.imageUrl} alt={`Cover of the album ${props.title} by ${props.artist}`} />
      <h2>{props.title}</h2>
      <p>{props.artist}</p>
      <p>{props.year}</p>
    </div>
  )
};

