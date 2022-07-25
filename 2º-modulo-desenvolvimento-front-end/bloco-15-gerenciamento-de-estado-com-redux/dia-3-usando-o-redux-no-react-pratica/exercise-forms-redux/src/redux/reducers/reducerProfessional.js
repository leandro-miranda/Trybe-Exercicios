const initialState = ({
  profissionalData: {},
});

const reducerProfissional = (state = initialState, action) => {
  switch (action.type) {
  case 'profissional':
    return ({
      ...state,
      profissionalData: action.profissionalData,
    });
  default:
    return state;
  }
};

export default reducerProfissional;
