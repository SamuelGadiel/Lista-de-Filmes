import React from 'react';
import FilmeControls from './FilmeControls';

// Função que cria um card de filme.
// Recebe um filme e o tipo desse filme, podendo ser "lista" ou "assistidos"
function CardFilme({ filme, tipo }) {
  return (
    <div className="movie-card">
      {/* Efeito de overlay no card */}
      <div className="overlay" />

      {/* Checa se o filme tem uma capa, se tiver gera uma tag img com a imagem */}
      {filme.poster_path
        ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${filme.poster_path}`}
            alt={`${filme.title} Poster`}
          />
        )
        : (
          // Se não tiver capa gera um container cinza genérico
          <div className="filler-poster" />
        )}

      {/* Gera os controles para clicar quando um filme foi assitido ou remove-lo
          Aqui são passados o tipo e o filme em si. */}
      <FilmeControls tipo={tipo} filme={filme} />
    </div>
  );
}

export default CardFilme;
