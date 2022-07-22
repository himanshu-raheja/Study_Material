import React from 'react'
import UserContext from './UserContext'
import {ThemeContext} from './MainComponent'

export default class CompC extends React.Component {
    static contextType = UserContext
    content = () => {
      return (<UserContext.Consumer>{(name) =>
        (<ThemeContext.Consumer>{({theme, toggle}) => {
          return (
            <div>
              <div>{name} click on button to see the magic</div>
              <button onClick={toggle}>Theme: {theme}</button>
            </div>)
        }}</ThemeContext.Consumer>)
      }</UserContext.Consumer>)
    }
    render () {
      return (this.content())
    }
}
