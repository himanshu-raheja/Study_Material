import React from 'react'
import UserContext from './UserContext'
import CompD from './CompD'

export default class CompB extends React.Component {
    static contextType = UserContext
    render () {
      return (
        <div>
          <div>
            Component B shouts {this.context}
          </div>
          <UserContext.Provider value={'Timu'}>
            <CompD />
          </UserContext.Provider>
        </div>
      )
    }
}
