/* eslint-disable react/prop-types */
import React from 'react'
import ClickedComp from './ClickedComp'
import Counter from './Counter'
import HoverComp from './HoverComp'
export default class MainComponent extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Counter
          renderFunc={(count, incrementCount) =>
            <ClickedComp count={count} incrementCount={incrementCount} />} />

        <Counter>
          {
            (count, incrementCount) => <HoverComp count={count} incrementCount={incrementCount} />
          }
        </Counter>
      </React.Fragment>
    )
  }
}
