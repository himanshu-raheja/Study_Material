import React from 'react'
import ClickedComp from './ClickedComp'
import HoverComp from './HoverComp'

export default class MainComponent extends React.Component {
  render () {
    return (<React.Fragment>
      <ClickedComp name={'Himanshu'} />
      <HoverComp />
    </React.Fragment>)
  }
}
