/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'
import withHOCCounter from './withHOCCounter'

// update the increment counter to 10
function HoverComp (props) {
  const {count, handlerFunc} = props
  return (<div onMouseOver={handlerFunc}>Hovered {count} times</div>)
}

export default withHOCCounter(HoverComp, 10)
