import React from 'react'
import ErrorBoundaryBasic from './ErrorBoundaryBasic'
import ErrorComp from './ErrorComp'
export default function MainComponent () {
  return (
    <React.Fragment>
      <ErrorBoundaryBasic>
        <ErrorComp name={'Himanshu'} />
        <ErrorComp name={'Tooddo'} />
        <ErrorComp name={'joker'} />

      </ErrorBoundaryBasic>
    </React.Fragment>
  )
}
