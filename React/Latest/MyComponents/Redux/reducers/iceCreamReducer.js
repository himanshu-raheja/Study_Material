import { BUY_ICE_CREAM } from '../iceCream/iceCreamTypes'
const initialState = {
  noIceCream: 10
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        noIceCream: state.noIceCream - action.payload
      }
    default:
      return state
  }
}

export default reducer
