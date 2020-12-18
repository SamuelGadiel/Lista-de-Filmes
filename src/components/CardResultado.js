import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

// Gera os cards de resultado na tela de adicionar um novo filme.
function CardResultado({ filme }) {
  // Tendo recebido um filme, armazena a data em que esse filme foi lançado
  let date = filme.release_date;
  // Checa se essa data existe (não vazia), se sim, armazena apenas o ano do lançamento
  // Se for vazia mostra "Sem Data".
  date = date ? date.substring(0, 4) : 'Sem Data';

  // Recupera os estados do contexto global.
  const {
    addFilmeLista,
    lista,
    addFilmeAssistido,
    assistidos,
  } = useContext(GlobalContext);

  // Checa se esse filme ja esta na lista para assistir ou se está na lista de filmes
  // já assistidos.
  const filmeNaLista = lista.find((i) => i.id === filme.id);
  const filmeAssistido = assistidos.find((i) => i.id === filme.id);

  // Faz operador OU entre a lista de filmes e a lista de assistidos e armazena o bool
  const addListaDesabilitado = !!(filmeNaLista || filmeAssistido);

  // let addListaDesabilitado;
  // if (filmeNaLista || filmeAssistido) {
  //   addListaDesabilitado = true;
  // } else {
  //   addListaDesabilitado = false;
  // }

  // Armazena o bool de filmeAssistido.
  const addAssistidosDesabilitado = !!filmeAssistido;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {/* Se filme tiver poster gera tag img, se não gera container generico */}
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
      </div>

      <div className="info">
        <div className="header">
          {/* Nome e data de ano de lançamento do filme */}
          <h3 className="title">{filme.title}</h3>
          <h4 className="release-date">{date}</h4>
        </div>

        <div className="controls">
          {/* Botão para adicionar filme na lista para assistir
              Estará desabilitado se o filme já estiver na lista
              ou se já foi assistido */}
          <button
            className="btn"
            disabled={addListaDesabilitado}
            onClick={() => addFilmeLista(filme)}
          >
            + Lista
          </button>

          {/* Botão para adicionar filme diretamente aos assistidos
              Estará desabilitado se o filme já estiver na lista de assistidos */}
          <button
            className="btn"
            disabled={addAssistidosDesabilitado}
            onClick={() => addFilmeAssistido(filme)}
          >
            + Assistidos
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardResultado;
