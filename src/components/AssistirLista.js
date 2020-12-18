import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import CardFilme from './CardFilme';

// Essa é a tela que mostra a lista de filmes que foram adicionados.
function AssistirLista() {
  // Usa o contexto do app onde estão armazenados todos os estados.
  // Neste caso está recuperando o estado da lista de filmes adicionados
  const { lista } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">
            Filmes para assistir
          </h1>

          {/* Contador de quantos filmes foram adicionados */}
          <span className="count-pill">
            {lista.length}
            {lista.length === 1 ? ' Filme' : ' Filmes'}
          </span>
        </div>

        {/*
        Quando um filme for adicionado ele gera um CardFilme para aquele item
        O CardFilme pede como parametro um filme em si e o tipo desse card.

        Caso não tenha nenhum filme adicionado ele mostra um H2 pedindo para adicionar algum.
        */}
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
