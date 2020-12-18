import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Cria os estados iniciais da lista de filmes e da lista de assistidos
// Nesse caso faz a checagem se já possui algo armazenado no cache do navegador
// Se tiver obtem os dados do cache como estado inicial
// Se não tiver gera os estados iniciais como lista vazia.
const initialState = {
  lista: localStorage.getItem('lista')
    ? JSON.parse(localStorage.getItem('lista'))
    : [],
  assistidos: localStorage.getItem('assistidos')
    ? JSON.parse(localStorage.getItem('assistidos'))
    : [],
};

// Cria um contexto global com os estados iniciais
// Esse contexto é o que será usado por todo o site
export const GlobalContext = createContext(initialState);

// Função que encapsula todos os components no App.js
export const GlobalProvider = (props) => {
  // useReducer é usado ao inves do useState para criar os casos
  // de cada situação de dispatch
  // Aqui é passado o AppReducer, que será a classe que tratará cada dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Sempre que algo é alterado na tela o useEffect é chamado para
  // atualizar o cache com a lista de filmes à assistir ou assistidos.
  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(state.lista));
    localStorage.setItem('assistidos', JSON.stringify(state.assistidos));
  }, [state]);

  // Ações disparadas pelas funções do site.
  // Sempre que uma funçao é chamada o useReducer é ativado com o dispatch
  // Nesse caso é passado o tipo de alteração que será feita e o que será alterado.
  const addFilmeLista = (filme) => {
    dispatch({ type: 'ADD_FILME', payload: filme });
  };

  const removeFilmeLista = (id) => {
    dispatch({ type: 'REMOVE_FILME', payload: id });
  };

  const addFilmeAssistido = (filme) => {
    dispatch({ type: 'ADD_ASSISTIDO', payload: filme });
  };

  const moverParaLista = (filme) => {
    dispatch({ type: 'MOVER_PARA_LISTA', payload: filme });
  };

  const removeAssistido = (id) => {
    dispatch({ type: 'REMOVE_ASSISTIDO', payload: id });
  };

  // Vai retonar o provider do contexto global, com isso é possivel
  // usar o destruct para obter cada uma das funções ou dados do contexto.
  return (
    <GlobalContext.Provider
      value={{
        lista: state.lista,
        assistidos: state.assistidos,
        addFilmeLista,
        removeFilmeLista,
        addFilmeAssistido,
        moverParaLista,
        removeAssistido,
      }}
    >
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {props.children}
    </GlobalContext.Provider>
  );
};
