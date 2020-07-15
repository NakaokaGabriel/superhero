const INITIAL_STATE = {
  name: '',
  error: false,
  heroId: '',
  message: '',
};

function hero(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@hero/SEARCH_HERO': {
      state.name = action.payload.name;
      state.error = false;
      state.message = '';

      return state;
    }
    case '@hero/SEARCH_HERO_ERROR': {
      state.error = true;
      state.message = action.payload.message;

      return state;
    }
    case '@hero/SEARCH_HERO_ID': {
      state.heroId = action.payload.id;

      return state;
    }
    default:
      return state;
  }
}

export default hero;
