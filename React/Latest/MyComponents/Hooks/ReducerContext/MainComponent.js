/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react'
import CompA from './CompA.js'
import CompB from './CompB.js'
import CompC from './CompC.js'

function reducer (state, action) {
  switch (action.type) {
    case 'Increment':
      return state + action.value
    case 'Decrement':
      return state - action.value
    case 'Reset':
      return 0
    default:
      return state
  }
}

export const CounterContext = React.createContext()

export default function MainComponent () {
  const [count, disptachCount] = useReducer(reducer, 0)

  return (<div>
    <div>Count: {count}</div>
    <CounterContext.Provider value={{
      counterValue: count,
      dispatchCounter: disptachCount}}>
      <CompA />
      <CompB />
      <CompC />
    </CounterContext.Provider>
  </div>)
}
