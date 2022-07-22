import React from 'react'

export default class CustomInput extends React.Component {
  constructor (props) {
    super(props)
    this.mineRef = React.createRef()
  }
  componentDidMount () {
    this.mineRef.current.focus()
  }
  myBlur () {
    this.mineRef.current.blur()
  }
  render () {
    return <input type='text' ref={this.mineRef} />
  }
}
