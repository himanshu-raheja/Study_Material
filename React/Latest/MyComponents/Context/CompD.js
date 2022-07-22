import React from 'react'
import UserContext from './UserContext'
// Expected o/p Timu
export default class CompD extends React.Component {
    static contextType = UserContext
    render () {
      return (
        <div>
          <div>
            Component D shouts {this.context}
          </div>
        </div>
      )
    }
}
