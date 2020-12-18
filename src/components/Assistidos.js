import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CardFilme from './CardFilme';

// Essa é a tela que mostra a lista de filmes que foram assistidos.
function Assistidos() {
  // Recupera o estado dos filmes que já foram assistidos.
  const { assistidos } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Filmes assistidos
          </h1>

          {/* Contador de quantos filmes foram assistidos */}
          <span className="count-pill">
            {assistidos.length}
            {assistidos.length === 1 ? ' Filme' : ' Filmes'}
          </span>
        </div>

        {/*
        Assim como o AssistirLista a pagina Assistidos vai criar um CardFilme para cada
        filme que for adicionado no estado de "assistido".

        Nesse caso, o tipo do CardFilme é "assistidos".

        Caso não tenha nenhum filme assistido ele mostra um H2 pedindo para assistir algum.
        */}
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
