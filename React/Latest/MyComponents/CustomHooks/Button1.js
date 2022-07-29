import React from 'react'
import { useValueHook } from './useValueHook'
export default function MainComponent () {
  const [salary, setSalary] = useValueHook(1000, 25000)

  return (<div>
    <div>Salary: {salary}</div>
    <button value={'Increment Salary'} onClick={() => setSalary()} >Increment Salary</button>
  </div>)
}
