import React, { useState } from 'react';
import CardResultado from './CardResultado';

// Essa é a tela que onde pode adicionar novos filmes por meio de uma barra de busca.
function Adiciona() {
  // Cria dois Hooks, um para a busca que está sendo feita e outro para os resultados
  // que forem obtidos pelo request.
  const [busca, setBusca] = useState('');
  const [resultados, setResultados] = useState([]);

  // Função que é chamada quando escrever no campo de busca.
  function onChange(event) {
    // Evita que o site execute processo padrão para campos input.
    event.preventDefault();

    // Armazena o que foi escrito no campo busca.
    const request = event.target.value;
    // Muda o estado da busca para o que a pessoa escreveu
    // Com isso aparece no campo o que foi digitado.
    setBusca(request);

    // Caso a pessoa tenha escrito alguma coisa o site faz o fetch dos dados
    // É necessario fazer essa checagem pois caso a pessoa apague o que escreveu
    // essa função é chamada, pois o campo foi alterado, mas não é feito um request
    if (request.length > 0) {
      // É feito um GET passando a chave de API e o que a pessoa escreveu.
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=44088e84e9ff318b1ee21a443fdb5356&language=pt-BR&page=1&include_adult=false&query=${request}`,
      )
        // A respostá é convertida em JSON
        .then((res) => res.json())
        .then((data) => {
          // Checa se possui algum erro. Caso não possua o site altera o
          // estado de "resultados" armazenando os dados obtidos.
          if (!data.errors) {
            setResultados(data.results);
          } else {
            // Caso tenha algum erro o site armazena uma lista vazia em "resultados".
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

            {/* Campo de input onde a pessoa escreve o nome do filme.
            Quando a pessoa escrever algo chama a função onChange
            e executa o request com o que estiver escrito no campo */}
            <input
              type="text"
              placeholder="Buscar um filme"
              value={busca}
              onChange={onChange}
            />
          </div>

          {/*
          Checa se "resultados" possui algum dado, caso possua cria uma lista
          não ordenada de resultados
          Então mapeia cada resultado para gerar um CardResultado, onde é
          passado o filme que foi obtido.
           */}
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
