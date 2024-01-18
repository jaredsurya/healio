import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from './userContext'

//not sure what this is for

function Protected({ children }) {
  const { user } = useContext(UserContext)
  
  if (!user) {
    return <Navigate to="/signin" replace />
  }
  return children

}

export default Protected