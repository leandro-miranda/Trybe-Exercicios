import categories from '../../data';

const INITIAL_STATE = {
  categories: [...categories],
  selectedCategory: {},
  selectedMovie: {},
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'SELECT_MOVIE':
    return {
      ...state,
      selectedCategory: action.category,
      selectedMovie: action.movie,
    };
  default:
    return state;
  }
};

export default movieReducer;
