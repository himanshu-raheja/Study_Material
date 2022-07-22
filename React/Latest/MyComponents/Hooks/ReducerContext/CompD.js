import React, { useContext } from 'react'
import { CounterContext } from './MainComponent'

export default function CompD () {
  let userContextValue = useContext(CounterContext)
  return (<div>
    <div>
      Component D shouts {userContextValue.counterValue}
    </div>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Increment', value: 10})}>
      Increment by 10
    </button>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Decrement', value: 10})}>
      Decrement by 10
    </button>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Reset'})}>
      Reset
    </button>
  </div>)
}
