import { INCREASE_COUNT_BY_ONE, DECREASE_COUNT_BY_ONE, INCREASE_COUNT_BY_FIVE, DECREASE_COUNT_BY_FIVE,INCREASE_COUNT_BY_TEN, DECREASE_COUNT_BY_TEN,RESET } from '../actions/counterAction';

const initialState = {
  count: 0
}

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE_COUNT_BY_ONE:
      return { count: state.count + action.payload.count};
    case DECREASE_COUNT_BY_ONE:
      return { count: state.count - action.payload.count};
      case INCREASE_COUNT_BY_FIVE:
        return { count: state.count + action.payload.count};
      case DECREASE_COUNT_BY_FIVE:
        return {count: state.count - action.payload.count};
      case INCREASE_COUNT_BY_TEN:
        return { count: state.count + action.payload.count};
      case DECREASE_COUNT_BY_TEN:
        return {count: state.count - action.payload.count};
      case RESET:
          return {count: 0};
    default:
      return state;
  }
}

export default counterReducer;