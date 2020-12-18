// Aqui são definidas cada funçao que é utilizada pelo programa
// Quando uma função é chamada o programa gera um dispatch que
// passará um tipo para o AppReducer, que por sua vez dará um
// match usando switch para ver qual operação deverá ser feita
export default (state, action) => {
  switch (action.type) {
    // Adicionar filme da lista
    case 'ADD_FILME':
      return {
        ...state,
        lista: [action.payload, ...state.lista],
      };

    // Remover filme da lista
    case 'REMOVE_FILME':
      return {
        ...state,
        lista: state.lista.filter(
          (filme) => filme.id !== action.payload,
        ),
      };

    // Adicionar filme aos assistidos
    case 'ADD_ASSISTIDO':
      return {
        ...state,
        lista: state.lista.filter(
          (filme) => filme.id !== action.payload.id,
        ),
        assistidos: [action.payload, ...state.assistidos],
      };

    // Mover dos assistidos para a lista
    case 'MOVER_PARA_LISTA':
      return {
        ...state,
        assistidos: state.assistidos.filter((filme) => filme.id !== action.payload.id),
        lista: [action.payload, ...state.lista],
      };

    // Remover dos assistidos
    case 'REMOVE_ASSISTIDO':
      return {
        ...state,
        assistidos: state.assistidos.filter((filme) => filme.id !== action.payload),
      };

    default:
      return state;
  }
};
