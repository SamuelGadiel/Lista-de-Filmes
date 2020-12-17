import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function CardResultado({ filme }) {
  let date = filme.release_date;
  date = date ? date.substring(0, 4) : 'Sem Data';

  const {
    addFilmeLista,
    lista,
    addFilmeAssistido,
    assistidos,
  } = useContext(GlobalContext);

  const filmeNaLista = lista.find((i) => i.id === filme.id);
  const filmeAssistido = assistidos.find((i) => i.id === filme.id);

  const addListaDesabilitado = !!(filmeNaLista || filmeAssistido);

  // let addListaDesabilitado;
  // if (filmeNaLista || filmeAssistido) {
  //   addListaDesabilitado = true;
  // } else {
  //   addListaDesabilitado = false;
  // }

  const addAssistidosDesabilitado = !!filmeAssistido;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
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
          <h3 className="title">{filme.title}</h3>
          <h4 className="release-date">{date}</h4>
        </div>
        <div className="controls">
          <button
            className="btn"
            disabled={addListaDesabilitado}
            onClick={() => addFilmeLista(filme)}
          >
            + Lista
          </button>
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
