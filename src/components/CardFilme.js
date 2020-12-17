import React from 'react';
import FilmeControls from './FilmeControls';

function CardFilme({ filme, tipo }) {
  return (
    <div className="movie-card">
      <div className="overlay" />

      {filme.poster_path
        ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
            alt={`${filme.title} Poster`}
          />
        )
        : (
          <div className="filler-poster" />
        )}

      <FilmeControls tipo={tipo} filme={filme} />
    </div>
  );
}

export default CardFilme;
