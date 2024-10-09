import React, { useState } from 'react'
import { useAuth } from '../Auth/AuthProbider'

const Content = () => {
  const [tab, setTab] = useState('Preview')
  const {isAuthenticated} = useAuth()
    // console.log(isAuthenticated)
  return (
    <div className='bg-[#f2f2f2] h-screen p-10'>
      <div className='flex items-center justify-between'>
        <h1 className='text-3xl font-semibold'>Blogs</h1>
          <div className='flex items-center gap-5'>
            <button onClick={() => setTab('Add')} className={`px-8 py-3 font-semibold rounded-xl shadow-md ${tab === 'Add' ? 'bg-[#6C5DD3] text-white' : 'text-[#6C5DD3] bg-white'}`}>Add New</button>
            <button onClick={() => setTab('Preview')} className={`px-8 py-3 font-semibold rounded-xl shadow-md ${tab === 'Preview' ? 'bg-[#6C5DD3] text-white' : 'text-[#6C5DD3] bg-white'}`}>Preview</button>
          </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Content