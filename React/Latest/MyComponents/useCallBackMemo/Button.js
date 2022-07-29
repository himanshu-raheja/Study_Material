/* eslint-disable react/prop-types */
import React from 'react'

function Button (props) {
  console.log(`${props.value} called`)
  return (<button onClick={props.handleClick}>{props.value}</button>)
}

export default React.memo(Button)
