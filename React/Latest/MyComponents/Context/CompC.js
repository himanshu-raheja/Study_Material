import React from 'react'
import UserContext from './UserContext'
import {ThemeContext} from './MainComponent'
import CompE from './CompE'

export default class CompC extends React.Component {
  render () {
    return (
      <React.Fragment><UserContext.Consumer>{(name) => (<ThemeContext.Consumer>{({ theme }) => {
        return (<div> Comp C with name {name} & with theme {theme}</div>)
      }}</ThemeContext.Consumer>)}
      </UserContext.Consumer><CompE /></React.Fragment>
    )
  }
}
