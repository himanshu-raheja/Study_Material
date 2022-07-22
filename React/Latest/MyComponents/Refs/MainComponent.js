import React from 'react'
import CustomInput from './CustomInput'
import FwdRef from './FwdRef'

export default class MainComponent extends React.Component {
  constructor (props) {
    super(props)
    this.simpleRef = React.createRef()
    this.callBackRefFunc = (element) => {
      this.callBackRef = element
    }
    this.classRef = React.createRef()
    this.buttonRef = React.createRef()
  }
  componentDidMount () {
    // this.focusRef()
    this.classRef.current.myBlur() // you have instance stored with you of the class you can use it to access methods
    this.buttonRef.current.addEventListener('click', () => {
      console.log('I am used via Refs')
    })
  }
  focusRef () {
    this.simpleRef.current.focus()
    this.callBackRef.focus()
  }

  render () {
    return (
      <div>
        <input type='text' ref={this.simpleRef} />
        <input type='text' ref={this.callBackRefFunc} />
        <CustomInput ref={this.classRef} />
        <FwdRef ref={this.buttonRef} />
      </div>
    )
  }
}
