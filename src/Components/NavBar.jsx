import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";

import React from 'react'
import { useAuth } from "../Auth/AuthProbider";

const NavBar = () => {
    const { user } = useAuth()
    return (
        <div className="flex  items-center flex-col-reverse md:flex-row justify-between md:px-5 py-1 border-b-2">
            <div className="flex items-center justify-between w-full gap-3 md:justify-center md:w-fit px-10 md:px-0 ">
                <div className='flex text-center gap-2 bg-[#f2f2f2] items-center justify-between p-3 rounded-2xl'>
                    <h1 className='text-black'>Afterglow</h1>
                    <IoIosArrowDown />
                </div>
                <div className="flex items-center justify-center gap-2 ">
                    <h1 className="text-black font-semibold">Scenario: </h1>
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold text-black">Default</h1>
                        <IoIosArrowDown />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between md:justify-end w-full px-10 md:px-0 gap-2">
                <div className="flex items-center justify-center gap-3 md:hidden ">
                    <img src="/assets/logo.png" alt="" />
                    <h2 className="text-[#6C5DD3] font-semibold text-lg">Jadwa</h2>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center justify-center gap-2">
                        <IoIosSearch size={25} />
                        <h1 className="hidden lg:flex">Search....</h1>
                    </div>
                    {user && <div className="flex gap-1 border-[#f2f2f2] p-2 rounded-xl">
                        <img src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg" className="w-12 rounded-full border-2" alt="" />
                        <div className="hidden md:flex md:flex-col">
                            <h1>{user.name}</h1>
                            <h1>{user.email.slice(0, 9)}</h1>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default NavBar