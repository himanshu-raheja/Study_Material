import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { reducer } from './reducers/rootReducer'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)))
export default store
