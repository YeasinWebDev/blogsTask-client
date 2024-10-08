import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { MdEventNote } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { LuLineChart } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const SideBar = () => {
    const navLink = [
        {
            icon: IoHomeOutline,
            name: 'Dashboard'
        },
        {
            icon: MdEventNote,
            name: 'Blogs'
        },
        {
            icon: IoStatsChart,
            name: 'Finances'
        },
        {
            icon: LuLineChart,
            name: 'Pitches'
        },
        {
            icon: CiSettings,
            name: 'Settings'
        },
        {
            icon: CiLogout,
            name: 'Log out'
        }
    ];

    return (
        <div className='relative h-screen'>
            <div className='relative border-r-2 border-[#f2f2f2] h-screen lg:px-4 px-3 py-3 md:flex flex-col justify-between hidden'>
                <div className='flex flex-col gap-10'>
                    <div className="flex items-center justify-center gap-3">
                        <img src="/assets/logo.png" alt="" />
                        <h2 className="text-[#6C5DD3] font-semibold hidden lg:flex text-lg">Jadwa</h2>
                    </div>

                    <div>
                        {
                            navLink.slice(0, 4).map((item, index) => (
                                <div key={index} className={`${item.name === 'Blogs' ? 'text-[#6C5DD3]' : 'text-[#000000]'} flex items-center lg:gap-3 hover:bg-[#F1F3F5] py-2 px-4 cursor-pointer`}>
                                    <item.icon size={20} />
                                    <span className='font-semibold hidden lg:flex xl:text-lg'>{item.name}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div>
                    {
                        navLink.slice(4, 6).map((item, index) => (
                            <div key={index} className="flex items-center lg:gap-3 hover:bg-[#F1F3F5] py-2 px-4 cursor-pointer">
                                <item.icon className="text-[#000000] w-5 h-5" />
                                <span className='font-semibold hidden lg:flex xl:text-lg'>{item.name}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='fixed z-50 bottom-0 p-3 md:hidden w-full bg-white'>
                <div className='flex items-center justify-center z-50 w-full gap-5'>
                    {
                        navLink.slice(0, 4).map((item, index) => (
                            <div key={index} className={`${item.name === 'Blogs' ? 'text-[#6C5DD3]' : 'text-[#000000]'} flex items-center hover:bg-[#F1F3F5] py-2 px-4 cursor-pointer`}>
                                <item.icon size={20} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SideBar;
