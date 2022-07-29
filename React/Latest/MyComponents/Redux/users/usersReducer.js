import { FETCH_USERS, USERES_FETCHED, ERROR_OCCURED } from './usersTypes'

const initialState = {
  loading: false,
  data: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
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

export default reducer
