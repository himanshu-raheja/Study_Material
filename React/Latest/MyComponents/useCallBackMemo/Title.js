import React from 'react'

function Title () {
  console.log('Title called')
  return (<div>Details Maintainer</div>)
}

export default React.memo(Title)
