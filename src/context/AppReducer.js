export default (state, action) => {
  switch (action.type) {
    case 'ADD_FILME':
      return {
        ...state,
        lista: [action.payload, ...state.lista],
      };

    case 'REMOVE_FILME':
      return {
        ...state,
        lista: state.lista.filter(
          (filme) => filme.id !== action.payload,
        ),
      };

    case 'ADD_ASSISTIDO':
      return {
        ...state,
        lista: state.lista.filter(
          (filme) => filme.id !== action.payload.id,
        ),
        assistidos: [action.payload, ...state.assistidos],
      };

    case 'MOVER_PARA_LISTA':
      return {
        ...state,
        assistidos: state.assistidos.filter((filme) => filme.id !== action.payload.id),
        lista: [action.payload, ...state.lista],
      };

    case 'REMOVE_ASSISTIDO':
      return {
        ...state,
        assistidos: state.assistidos.filter((filme) => filme.id !== action.payload),
      };

    default:
      return state;
  }
};
