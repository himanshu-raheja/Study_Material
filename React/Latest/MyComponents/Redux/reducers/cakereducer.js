import { BUY_CAKE } from '../cakes/cakeTypes'
const initialState = {
  noCakes: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noCakes: state.noCakes - 1
      }
    default:
      return state
  }
}

export default reducer
