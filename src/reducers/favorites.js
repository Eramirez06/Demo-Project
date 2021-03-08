import { UPDATE_FAVS } from '../actions/types';

const init = {
  favs: [],
};

function favorites(state = init, action) {
  switch (action.type) {
    case UPDATE_FAVS:
      return {
        ...state,
        favs: action.payload,
      };
    default:
      return state;
  }
}
export default favorites;
