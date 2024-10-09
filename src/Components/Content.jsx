import React, { useEffect, useState } from 'react'
import { AddBlogs } from './AddBlogs';
import Card from './Card';
import { useAuth } from '../Auth/AuthProbider';


const Content = () => {
  const [tab, setTab] = useState('Preview')
  const [reload, setreload] = useState(false)
  const [data, setdata] = useState(null)
  const [loading, setloading] = useState(false)
  const {setUpdateData,user} = useAuth()

  const dataarray = async () => {
    setloading(true)
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/blogs`);
      const result = await response.json();
      setdata(result);
      setloading(false)
    } catch (error) {
      setloading(false)
      console.error("Failed to fetch blogs:", error);
    }
  }

  useEffect(() => {
    dataarray()
  }, [tab,reload])


  return (
    <div className='bg-[#f2f2f2] min-h-screen p-5 md:p-10 mb-20 md:mb-0'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl md:text-3xl font-semibold'>Blogs</h1>
        <div className='flex items-center gap-5'>
          <button onClick={() => {setTab('Add'),setUpdateData(null) }} className={`md:px-8 px-4 md:py-3 py-2 font-semibold rounded-xl shadow-md ${tab === 'Add' ? 'bg-[#6C5DD3] text-white' : 'text-[#6C5DD3] bg-white'}`}>Add New</button>
          <button onClick={() => setTab('Preview')} className={`md:px-8 px-4 md:py-3 py-2 font-semibold rounded-xl shadow-md ${tab === 'Preview' ? 'bg-[#6C5DD3] text-white' : 'text-[#6C5DD3] bg-white'}`}>Preview</button>
        </div>
      </div>
      {
        tab === "Preview" ?
          <div className='flex items-center justify-center gap-3 flex-wrap pt-10'>
            {
              loading ? (
                <div className='flex justify-center items-center '>
                    <span className='font-semibold text-xl pt-10'>Loading...</span>
                </div>
              ) : (
                data && data.map((item, index) => (
                  <div key={index} className='pb-5 md:w-[38vw] lg:w-[30vw] xl:w-[24vw] h-fit  bg-white  rounded-xl '>
                    <Card item={item} setreload={setreload} reload={reload} setTab={setTab}/>
                  </div>
                ))
              )
            }

          </div> 
          :
            <AddBlogs setTab={setTab}/>
      }
    </div>
  )
}

export default Content