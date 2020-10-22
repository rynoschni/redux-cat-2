import {
  ACTION_SET_NAME,
  ACTION_SET_ACTIVITY,
  ACTION_ADD_CAT,
} from "../actionTypes";

const initialState = {
    cats: {
        1001: {
            name: 'Beans',
            activity: 'meowing',
        },
        1002: {
            name: 'Bandit',
            activity: 'eating',
        },
    }
}

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_NAME: {
      const { name } = action.payload;
      return name;
    }
    case ACTION_SET_ACTIVITY: {
      const { id, activity } = action.payload;
      const name = state.cats[id].name;
      return {
        cats: {
          ...state.cats,
          [id]: { name, activity },
        },
      };
    }
    case ACTION_ADD_CAT: {
      const { name, activity } = action.payload;
      const id =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
      return {
        cats: {
          ...state.cats,
          [id]: { name, activity },
        },
      };
    }
    default:
      return state;
  }
};

export default nameReducer;