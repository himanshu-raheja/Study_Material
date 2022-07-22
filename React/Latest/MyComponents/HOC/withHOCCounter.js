import React from 'react'

const withHOCCounter = (WrappedComponent, incrementCounter) => {
  class withHOCCounter extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        count: 0
      }
    }

    handlerFunc = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + (incrementCounter || 1)
        }
      })
    }

    render () {
      return <WrappedComponent count={this.state.count} handlerFunc={this.handlerFunc} {...this.props} />
    }
  }
  return withHOCCounter
}

export default withHOCCounter
