/* eslint-disable react/prop-types */
import React from 'react'
import withHOCCounter from './withHOCCounter'

class ClickedComp extends React.Component {
  render () {
    const { count, handlerFunc, name } = this.props
    return (<button onClick={handlerFunc}>{name} Clicked {count} times</button>)
  }
}

export default withHOCCounter(ClickedComp)
