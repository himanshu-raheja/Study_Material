import { useState } from 'react'

export function useValueHook (incrementValue, defaultValue = 0) {
  const [value, setValue] = useState(defaultValue)

  const incrementValueFunc = () => {
    setValue(prevValue => prevValue + incrementValue)
  }

  return [value, incrementValueFunc]
}
