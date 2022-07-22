import React from 'react'
import Home from './Home'
import About from './AboutComponent'
// const About = React.lazy(() => import('./AboutComponent'))

// check main chunk size before & after lazy loading the react component
class LazyLoaded extends React.Component {
  render () {
    return (
      <React.Fragment>
        <header>
          <Home />
        </header>
        <body>
          <About />
          {/* <Suspense fallback={<div>loading ...</div>}>
            <About />
          </Suspense> */}
        </body>
      </React.Fragment>
    )
  }
}

export default LazyLoaded
