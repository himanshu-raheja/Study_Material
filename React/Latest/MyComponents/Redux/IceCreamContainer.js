/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { buyIceCreamAction } from './index'
import { connect } from 'react-redux'

function IceCreamContainer (props) {
  const [number, setNumber] = useState(1)
  return (<div>
    <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
    <h2> Number of ICecreams - {props.noIceCream}</h2>
    <button onClick={() => props.buyIceCream(number)}>Buy Cake</button>
  </div>)
}

// it receives state as its parameter & will return an object
// that will be mapped into props of the component

// the second parameter is the props passed to the component
const mapStateToProps = (state, ownProps) => {
  return {
    noIceCream: state.iceCream.noIceCream
  }
}

// it receives dispatch as its parameter & will return an object
// that will be used to dispatch the action. Returned Object will be mapped into props of the component

// the second parameter is the props passed to the component
const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    buyIceCream: (number) => dispatch(buyIceCreamAction(number))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(IceCreamContainer)
