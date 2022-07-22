/* eslint-disable react/prop-types */
import React from 'react'

export default function ErrorComp (props) {
  if (props.name === 'joker') {
    throw new Error('Joker is passed')
  }
  return (<div>My name is: {props.name}</div>)
}
