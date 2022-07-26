const INITIAL_STATE = {
  professionalData: {},
};

function professionalDataReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_PROFESSIONAL_DATA':
    return {
      ...state,
      professionalData: action.professionalData,
    };
  default:
    return state;
  }
}

export default professionalDataReducer;
