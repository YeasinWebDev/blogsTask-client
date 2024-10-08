import React from 'react'
import { useAuth } from '../Auth/AuthProbider'
import NavBar from './NavBar'
import SideBar from './SideBar'

export const Dashboard = () => {
  const { user } = useAuth()
  console.log(user)
  return (
    <div className='flex w-full'>
      <SideBar />
      <div className='w-full'>
        <NavBar />
        <h1>hi</h1>
      </div>
    </div>
  )
}
