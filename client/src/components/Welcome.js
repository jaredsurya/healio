import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import RightBar from './RightBar'
import Feed from './Feed'
const Welcome = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Feed />
      <RightBar />
    </div>
  )
}

export default Welcome
