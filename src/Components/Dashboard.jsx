import React from 'react'
import { useAuth } from '../Auth/AuthProbider'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './Content'

export const Dashboard = () => {
  const { user } = useAuth()
  console.log(user)
  return (
    <div className='flex w-full'>
      <SideBar />
      <div className='w-full'>
        <NavBar />
        <div>
          <Content/>
        </div>
      </div>
    </div>
  )
}
