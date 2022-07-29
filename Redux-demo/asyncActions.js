const redux = require('redux')
const axios = require('axios')
const thunkMiddleWare = require('redux-thunk').default

const FETCH_USERS = 'FETCH_USERS'
const USERES_FETCHED= 'USERS_FETCHED'
const ERROR_OCCURED = 'ERROR_OCCURED'

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const fetchUsersAction = () => {
    return {
        type: FETCH_USERS
    }
}

const usersFetchedAction = (payload) => {
    return {
        type: USERES_FETCHED,
        payload: payload
    }
}

const errorOccuredAction = (payload) => {
    return {
        type: ERROR_OCCURED,
        payload: payload
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                loading: true
            }
        
        case USERES_FETCHED: 
            return {
                loading: false,
                data: action.payload,
                error: ''
            }
        case ERROR_OCCURED: 
            return {
                loading: false,
                data: [],
                error: action.payload
            }
        default: 
            return state
    }
}

const fetchSetUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersAction())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            dispatch(usersFetchedAction(res))
        }).catch(error => {
            dispatch(errorOccuredAction(error.message))
        })
    }
}

const store = redux.createStore(reducer, redux.applyMiddleware(thunkMiddleWare))
store.dispatch(fetchSetUsers())

const unSubscribe = store.subscribe(() => {
    console.log(store.getState())
})