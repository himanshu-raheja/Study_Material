const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE'

const initial_state = {
    noCakes: 10
}

function reducerFunc(state=initial_state, action) {
    switch(action.type) {
        case BUY_CAKE: 
        return {
            ...state,
            noCakes: state.noCakes - 1
        }
        default:
            return state
    }
}

const actionCreator = () => {
    return {
        type: BUY_CAKE
    }
}

const store = redux.createStore(reducerFunc)
console.log(store.getState())

// subscribe method returns unsubscribe as well which can be used to unsubscribe the events
const unSubscribeReturned = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(actionCreator()) // disptah action
store.dispatch(actionCreator())
store.dispatch(actionCreator())
unSubscribeReturned()

// nothing will be printed as we unsubscribed to the changes
store.dispatch(actionCreator())
