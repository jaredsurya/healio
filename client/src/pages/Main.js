import React from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import RightBar from '../components/RightBar'
import Feed from '../components/Feed'

const Main = () => {
  return (
    <div>
      <NavBar />
      <SideBar />
      <Feed />
      <RightBar />
    </div>
  )
}

export default Main
