export const INCREASE_COUNT_BY_ONE = 'INCREASE_COUNT_BY_ONE';
export const DECREASE_COUNT_BY_ONE = 'DECREASE_COUNT_BY_ONE';
export const INCREASE_COUNT_BY_FIVE = 'INCREASE_COUNT_BY_FIVE';
export const DECREASE_COUNT_BY_FIVE ='DECREASE_COUNT_BY_FIVE';
export const INCREASE_COUNT_BY_TEN = 'INCREASE_COUNT_BY_TEN';
export const DECREASE_COUNT_BY_TEN ='DECREASE_COUNT_BY_TEN';
export const RESET ='RESET';


export const increaseCountByOne = () => ({
  type: INCREASE_COUNT_BY_ONE,
  payload: {count: 1}
})

export const decreaseCountByOne = () => ({
  type: DECREASE_COUNT_BY_ONE,
  payload: {count: 1}
})
export const increaseCountByFive = () => ({
  type: INCREASE_COUNT_BY_FIVE,
  payload: {count: 5}
})

export const decreaseCountByFive = () => ({
  type: DECREASE_COUNT_BY_FIVE,
  payload: {count: 5}
})
export const increaseCountByTen = () => ({
  type: INCREASE_COUNT_BY_TEN,
  payload: {count: 10}
})

export const decreaseCountByTen = () => ({
  type: DECREASE_COUNT_BY_TEN,
  payload: {count: 10}
})
export const reset = () => ({
  type: RESET,
 
})