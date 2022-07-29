const redux = require('redux')
const combineReducers = redux.combineReducers
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICE_CREAM = 'BUY_ICE_CREAM'

const initial_state_cakes = {
    noCakes: 10
}

const initial_state_iceCreams = {
    noIceCreams: 50
}

function reducerFuncCake(state=initial_state_cakes, action) {
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

function reducerFuncIceCream(state=initial_state_iceCreams, action) {
    switch(action.type) {
        case BUY_ICE_CREAM: 
        return {
            ...state,
            noIceCreams: state.noIceCreams - 1
        }
        default:
            return state
    }
}


const reducers = combineReducers({
    cake: reducerFuncCake,
    iceCream: reducerFuncIceCream
})
const actionCreatorCake = () => {
    return {
        type: BUY_CAKE
    }
}

const actionCreatorIceCream = () => {
    return {
        type: BUY_ICE_CREAM
    }
}

const store = redux.createStore(reducers)
console.log(store.getState())

// subscribe method returns unsubscribe as well which can be used to unsubscribe the events
const unSubscribeReturned = store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(actionCreatorCake()) // disptah action cakes
store.dispatch(actionCreatorCake())
store.dispatch(actionCreatorCake())

store.dispatch(actionCreatorIceCream()) // disptah action Ice creams
store.dispatch(actionCreatorIceCream())
store.dispatch(actionCreatorIceCream())

unSubscribeReturned()

// nothing will be printed as we unsubscribed to the changes
store.dispatch(actionCreatorCake())
