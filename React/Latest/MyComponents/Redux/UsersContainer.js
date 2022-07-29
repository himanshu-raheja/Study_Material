/* eslint-disable react/prop-types */
import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './users/usersAction'

function UsersContainer (props) {
  useEffect(() => {
    props.fetchUsers()
  }, [])

  return (<div>
    {props.userDetails.loading ? 'Loading'
      : props.userDetails.error ? props.userDetails.error : props.userDetails.data && props.userDetails.data.map((e, idx) => <p key={idx}>{e}</p>)}
  </div>)
}

const mapStatetoProps = (state, ownProps) => {
  return ({
    userDetails: state.userDetails
  }
  )
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UsersContainer)
