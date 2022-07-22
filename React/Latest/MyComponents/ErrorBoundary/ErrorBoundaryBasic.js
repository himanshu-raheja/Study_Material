/* eslint-disable react/prop-types */
import React from 'react'

export default class ErrorBoundaryBasic extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  static getDerivedStateFromError (error) {
    // to render a fallback UI this method is used
    console.log(error)
    // you can not do set State fromhere instead you can retuen a state
    return {
      hasError: true
    }
  }

  componentDidCatch (error, errorInfo) {
    // Actual error will be inside this error argument
    // log error to error logging service
    console.log(error)
    console.log(errorInfo)
  }
  render () {
    if (this.state.hasError) {
      return (<div>Something went wrong</div>)
    }
    return this.props.children
  }
}
