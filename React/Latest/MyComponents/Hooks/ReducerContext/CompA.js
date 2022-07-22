import React, { useContext } from 'react'
import { CounterContext } from './MainComponent'

export default function CompA () {
  let userContextValue = useContext(CounterContext)
  return (<div>
    <div>
      Component A shouts {userContextValue.counterValue}
    </div>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Increment', value: 5})}>
      Increment by 5
    </button>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Decrement', value: 5})}>
      Decrement by 5
    </button>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Reset'})}>
      Reset
    </button>
  </div>)
}
