import React, { useContext } from 'react'
import { CounterContext } from './MainComponent'

export default function CompF () {
  let userContextValue = useContext(CounterContext)
  return (<div>
    <div>
      Component F shouts {userContextValue.counterValue}
    </div>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Increment', value: 1})}>
      Increment by 1
    </button>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Decrement', value: 1})}>
      Decrement by 1
    </button>
    <button onClick={() =>
      userContextValue.dispatchCounter({type: 'Reset'})}>
      Reset
    </button>
  </div>)
}
