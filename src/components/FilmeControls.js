import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function FilmeControls({ filme, tipo }) {
  const {
    removeFilmeLista,
    addFilmeAssistido,
    moverParaLista,
    removeAssistido,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
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
