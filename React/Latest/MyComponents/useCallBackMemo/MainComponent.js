import React, {useState, useCallback, useMemo} from 'react'
import Button from './Button'
import Title from './Title'

export default function MainComponent () {
  const [age, setAge] = useState(0)
  const [salary, setSalary] = useState(25000)

  const incrementAge = useCallback(() => {
    setAge(prevAge => prevAge + 1)
  }, [age])

  const incrementSalary = useCallback(() => {
    setSalary(prevSalary => prevSalary + 1000)
  }, [salary])

  // isEven is totally dependent upon age even if you
  // salary value screen will hang due to processing of isEven function
  // We can use useMemo hook to overcome this problem
  const isEven = () => {
    let i = 0
    while (i < 10000000000) {
      i++
    }
    if (age % 2 === 0) {
      return true
    }
    return false
  }

  const isEvenVal = useMemo(isEven, [age])
  // useMemo will return a value not function
  return (<div>
    <Title />
    <div>Age: {age}</div>
    {isEvenVal && <div>Age is even</div>}
    <Button value={'Increment Age'} handleClick={incrementAge} />
    <div>Salary: {salary}</div>
    <Button value={'Increment Salary'} handleClick={incrementSalary} />
    {/* Even after using React.memo inside <Button /> component this will not work as expected
    On change of any of the state both the Buttons component will rerender. This is because of the function passed.
    because a new reference is created before rerender & after rerender of a function
    To over come this problem we have to use useCallBack which will memoise the function if it's dependency does not change
    */}
  </div>)
}
