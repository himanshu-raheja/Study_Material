import React from 'react'
import CakeContainer from './CakeContainer'
import HooksCakeContainer from './HooksCakeContainer'
import IceCreamContainer from './IceCreamContainer'
import UsersContainer from './UsersContainer'

export default function Container () {
  return (<div>
    <HooksCakeContainer />
    <CakeContainer />
    <IceCreamContainer />
    <UsersContainer />
  </div>)
}
