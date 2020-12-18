import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Função que gera os icones de controle dos cards.
function FilmeControls({ filme, tipo }) {
  // Cada botão tem uma respectiva função.
  // Aqui essas funções são obtidas do contexto geral
  const {
    removeFilmeLista,
    addFilmeAssistido,
    moverParaLista,
    removeAssistido,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {/* Se o tipo for "lista" quer dizer que se trata dos cards na tela inicial
          onde são mostrados os filmes que ainda serão assistidos
          Com isso mostra um botão para marcar o filme como assistido e outro para
          remover o filme da lista. */}
      {tipo === 'lista' && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => addFilmeAssistido(filme)}
          >
            <i className="fa-fw far fa-eye" />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFilmeLista(filme.id)}
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}

      {/* O tipo "assistidos" se refere a pagina de filmes que já foram
          assistidos, com isso é possivel marcar o filme como não assistido
          ou remove-lo da lista de assistidos. */}
      {tipo === 'assistidos' && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moverParaLista(filme)}
          >
            <i className="fa-fw far fa-eye-slash" />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeAssistido(filme.id)}
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
}

export default FilmeControls;
