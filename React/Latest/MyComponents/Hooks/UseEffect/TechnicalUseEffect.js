import React, { useState, useEffect } from 'react'

function TechnicalUseEffect () {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    const interval = setInterval(updateCounter, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  function updateCounter () {
    // setCounter(counter + 1) // do not use this can lead to wrong results use prevState instead
    setCounter(prevCounter => prevCounter + 1)
  }

  return (<div>{counter}</div>)
}

export default TechnicalUseEffect
