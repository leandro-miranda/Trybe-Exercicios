const INITIAL_STATE = {
  personalData: {},
};

function personalDataReducer(state = INITIAL_STATE, action) {
  // destruturar o state da action tbm é possibilidade
  const { personalData } = action;

  switch (action.type) {
  case 'SET_PERSONAL_DATA':
    return {
      ...state,
      personalData,
    };
  default:
    return state;
  }
}

export default personalDataReducer;
