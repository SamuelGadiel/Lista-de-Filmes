import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CardFilme from './CardFilme';

function AssistirLista() {
  const { lista } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Filmes para assistir
          </h1>
          <span className="count-pill">
            {lista.length}
            {lista.length === 1 ? ' Filme' : ' Filmes'}
          </span>
        </div>

        {lista.length > 0
          ? (
            <div className="movie-grid">
              {lista.map((filme) => (
                <CardFilme key={filme.id} filme={filme} tipo="lista" />
              ))}
            </div>
          )
          : (
            <h2 className="no-movies">
              Sem filmes na lista, adicione alguns!
            </h2>
          )}

      </div>
    </div>
  );
}

export default AssistirLista;
