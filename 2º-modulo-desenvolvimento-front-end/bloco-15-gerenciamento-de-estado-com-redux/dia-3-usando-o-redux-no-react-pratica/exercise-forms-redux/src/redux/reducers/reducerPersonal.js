const initialState = ({
  personalData: {},
});

const reducerPersonal = (state = initialState, action) => {
  switch (action.type) {
  case 'personal':
    return ({
      ...state,
      personalData: action.personalData,
    });
  default:
    return state;
  }
};

export default reducerPersonal;
