import React, { useState } from 'react';
import CardResultado from './CardResultado';

function Adiciona() {
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);

  function onChange(event) {
    event.preventDefault();
    const request = event.target.value;
    setBusca(request);

    if (request.length > 0) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=pt-BR&page=1&include_adult=false&query=${request}`,
      )
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResultados(data.results);
          } else {
            setResultados([]);
          }
        });
    }
  }

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Buscar um filme"
              value={busca}
              onChange={onChange}
            />
          </div>
          {resultados.length > 0 && (
            <ul className="results">
              {resultados.map((filme) => (
                <li key={filme.id}>
                  <CardResultado filme={filme} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Adiciona;
