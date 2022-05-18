import { NEW_SEARCH, RESET_SEARCH } from './actionTypes';

const INITIAL_STATE = {
    city: undefined,
    date: [],
    options: {
      adult: undefined,
      children: undefined,
      room: undefined,
    },
  };

  export function reducer (state = INITIAL_STATE, {type, payload}) {

    switch (type) {
        case NEW_SEARCH:
          return {
            search:payload
          };

        case RESET_SEARCH:
          return INITIAL_STATE;
        default:
          return state;
      }
    };