import axios from 'axios'
import {FETCH_USERS, USERES_FETCHED, ERROR_OCCURED} from './usersTypes'

export const fetchUsersAction = () => {
  return {
    type: FETCH_USERS
  }
}

export const usersFetchedAction = (payload) => {
  return {
    type: USERES_FETCHED,
    payload: payload
  }
}

export const errorOccuredAction = (payload) => {
  return {
    type: ERROR_OCCURED,
    payload: payload
  }
}

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersAction())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res =>
        dispatch(usersFetchedAction(res.data.map(e => e.name)))
      )
      .catch(error => dispatch(errorOccuredAction(error.message)))
  }
}
