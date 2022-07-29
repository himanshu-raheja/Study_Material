import React from 'react'
import { useValueHook } from './useValueHook'

export default function Button2 () {
  const [age, setAge] = useValueHook(1, 20)

  return (<div>
    <div>Salary: {age}</div>
    <button vqlue={'Increment Age'} onClick={() => setAge()}>Increment Age</button>
  </div>)
}
