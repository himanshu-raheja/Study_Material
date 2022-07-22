import React from 'react'
import ReactDOM from 'react-dom'

const PortalExample = () => {
  return (
    ReactDOM.createPortal(<button> Click & see the magic
      I am under different root
      but all the other React events
      are Same. Here is the bubbling part</button>,
    document.getElementById('button-root'))
  )
}

export default PortalExample
