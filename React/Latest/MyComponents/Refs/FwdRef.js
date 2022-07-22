import React from 'react'
import FwdRefChild from './FwdRefChild'
const FwdRef = React.forwardRef((props, ref) => {
  return (<div>
    I am first forwarded with this ref
    <FwdRefChild ref={ref} />
  </div>)
})

export default FwdRef
