/* eslint-disable no-unused-vars */
import React from 'react'
import UserContext from './UserContext'
import CompA from './CompA.js'
import CompB from './CompB.js'
import CompC from './CompC.js'
export const ThemeContext = React.createContext({
  theme: 'white',
  toggle: () => {
  }
})

export default class MainComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Toodo',
      theme: 'black'
    }
  }

  toggle = (e) => {
    let color = 'white'
    if (this.state.theme === color) {
      color = 'black'
    } else {
      color = 'white'
    }
    this.setState({
      theme: color
    })
  }
  render () {
    return (<container>
      <UserContext.Provider value={this.state.value}>
        <ThemeContext.Provider value={{
          theme: this.state.theme,
          toggle: this.toggle}}>
          <CompA />
          <CompB />
          <CompC />
          {/* <CompB />
          <CompC /> */}
        </ThemeContext.Provider>
      </UserContext.Provider>

    </container>)
  }
}
