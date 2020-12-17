import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// Estado inicial
const initialState = {
  lista: localStorage.getItem('lista')
    ? JSON.parse(localStorage.getItem('lista'))
    : [],
  assistidos: localStorage.getItem('assistidos')
    ? JSON.parse(localStorage.getItem('assistidos'))
    : [],
};

// criando contexto
export const GlobalContext = createContext(initialState);

// Provider Components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem('lista', JSON.stringify(state.lista));
    localStorage.setItem('assistidos', JSON.stringify(state.assistidos));
  }, [state]);

  // actions
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
