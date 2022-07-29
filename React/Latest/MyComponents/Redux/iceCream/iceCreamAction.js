import { BUY_ICE_CREAM } from './iceCreamTypes'

export const buyIceCreamAction = (number = 1) => {
  return {
    type: BUY_ICE_CREAM,
    payload: number
  }
}
