import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CardFilme from './CardFilme';

function Assistidos() {
  const { assistidos } = useContext(GlobalContext);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Filmes assistidos
          </h1>
          <span className="count-pill">
            {assistidos.length}
            {assistidos.length === 1 ? ' Filme' : ' Filmes'}
          </span>
        </div>

        {assistidos.length > 0
          ? (
            <div className="movie-grid">
              {assistidos.map((filme) => (
                <CardFilme key={filme.id} filme={filme} tipo="assistidos" />
              ))}
            </div>
          )
          : (
            <h2 className="no-movies">
              Assista alguns filmes!
            </h2>
          )}

      </div>
    </div>
  );
}

export default Assistidos;
