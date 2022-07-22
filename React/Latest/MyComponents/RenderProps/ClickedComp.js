/* eslint-disable react/prop-types */
import React from 'react'

class ClickedComp extends React.Component {
  render () {
    const { count, incrementCount, name } = this.props
    return (<button onClick={incrementCount}>{name} Clicked {count} times</button>)
  }
}

export default ClickedComp
