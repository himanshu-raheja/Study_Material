/* eslint-disable no-labels */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import PortalExample from './PortalExample'

export default class Portals extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      noClicks: 0
    }
  }
    handleClick = (e) => {
      this.setState((prevState) => ({
        noClicks: prevState.noClicks + 1
      }))
    }
    render () {
      return (
        <div onClick={this.handleClick}>
          No of clicks happened are: {this.state.noClicks}
          <PortalExample />
        </div>
      )
    }
}
