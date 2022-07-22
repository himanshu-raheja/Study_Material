/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react'

function HoverComp (props) {
  const {count, incrementCount} = props
  return (<div onMouseOver={incrementCount}>Hovered {count} times</div>)
}

export default HoverComp
