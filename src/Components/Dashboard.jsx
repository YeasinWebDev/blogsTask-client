import React, { useEffect } from 'react'
import { useAuth } from '../Auth/AuthProbider'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Content from './Content'

export const Dashboard = () => {
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      return navigate('/signIn')
    }
  }, [isAuthenticated])
  return (
    <div className='flex w-full'>
      <div className='fixed h-full md: xl:w-[12%] lg:w-[18%]'>
        <SideBar />
      </div>
      <div className='flex flex-col w-full md:ml-[10%] xl:ml-[12%] lg:ml-[18%]'>
        <NavBar />
        <div className='flex-grow'>
          <Content />
        </div>
      </div>
    </div>
  )
}
