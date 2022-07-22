import React from 'react'

const FwdRefChild = React.forwardRef((props, ref) => {
  return (
    <button ref={ref}>I am Child Ref Check me</button>
  )
})

export default FwdRefChild
