/* eslint-disable react/prop-types */
import React from 'react'

export default class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }
    incrementCount = () => {
      this.setState((prevState) => {
        return {count: prevState.count + 1}
      })
    }
    render () {
      return (this.props.children ? this.props.children(this.state.count, this.incrementCount)
        : this.props.renderFunc(this.state.count, this.incrementCount))
    }
}
