import React from 'react'
import UserContext from './UserContext'

export default class CompA extends React.Component {
  render () {
    return (<div>
      Component A shouts {this.context}
    </div>)
  }
}

CompA.contextType = UserContext
