import { combineReducers } from 'redux'
import cakeReducer from './cakereducer'
import iceCreamReducer from './iceCreamReducer'
import usersReducer from '../users/usersReducer'
export const reducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  userDetails: usersReducer
})
