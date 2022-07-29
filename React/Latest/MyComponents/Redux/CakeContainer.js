/* eslint-disable react/prop-types */
import React from 'react'
import { buyCakeAction } from './index'
import { connect } from 'react-redux'

function CakeContainer (props) {
  return (<div>
    <h2> Number of Cakes - {props.noCakes}</h2>
    <button onClick={props.buyCake}>Buy Cake</button>
  </div>)
}

// it receives state as its parameter & will return an object
// that will be mapped into props of the component

const mapStateToProps = (state) => {
  return {
    noCakes: state.cake.noCakes
  }
}

// it receives dispatch as its parameter & will return an object
// that will be used to dispatch the action. Returned Object will be mapped into props of the component

const mapDispatchtoProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCakeAction())
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CakeContainer)
