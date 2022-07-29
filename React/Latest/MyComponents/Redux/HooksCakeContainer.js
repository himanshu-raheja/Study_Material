/* eslint-disable react/prop-types */
import React from 'react'
import { buyCakeAction } from './index'
import { useSelector, useDispatch } from 'react-redux'

function HooksCakeContainer () {
  const noCakes = useSelector(state => state.cake.noCakes)
  const dispatch = useDispatch()
  return (<div>
    <h2> Using hooks Number of Cakes - {noCakes}</h2>
    <button onClick={() => dispatch(buyCakeAction())}>Buy Cake</button>
  </div>)
}

export default HooksCakeContainer
