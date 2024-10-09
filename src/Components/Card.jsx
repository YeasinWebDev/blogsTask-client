import { IoIosCalendar } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { useAuth } from "../Auth/AuthProbider";
import toast from "react-hot-toast";

const Card = ({ item,reload,setreload,setTab }) => {
    const{setUpdateData,user} = useAuth()

    const handleDelete = async() => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/delete/${item._id}` , {
            method: "DELETE",
        });
        setreload(!reload)
        toast.success('Blogs deleted successfully')
    }

    const handleUpdate = () => {
        setUpdateData(item)
        setTab('Add')
    }
    
    return (
        <div>
            <img
                src={item.category === 'Web Development' ?
                    'https://res.cloudinary.com/dlrktntvb/image/upload/v1728451764/web_yr4eq7.jpg' :
                    item.category === 'AI' ? 'https://res.cloudinary.com/dlrktntvb/image/upload/v1728451758/ai_yf9sjn.jpg'
                        : 'https://res.cloudinary.com/dlrktntvb/image/upload/v1728451750/design_m5zmge.webp'
                }
                alt="banner"
                className='object-cover h-[50%] w-full rounded-t-xl'
            />
            <div className='px-4 py-2'>
                <h1 className='font-semibold text-xl py-3'>{item.name}</h1>
                <h1 className='text-gray-500'>{item.description}</h1>
                <h1 className='font-semibold py-2 flex items-center gap-1'>Category: <span className='text-[#6C5DD3] text-lg'>{item.category}</span></h1>
                <div className='flex items-center gap-1 py-1'>
                    <CgProfile size={20} />
                    <h1 className='ml-2 text-gray-500 font-semibold'>{item.addedBy}</h1>
                </div>
                <div className='flex items-center gap-1 py-1'>
                    <IoIosCalendar size={20} />
                    <h1 className='ml-2 text-gray-500 font-semibold'>{item.createdAt}</h1>
                </div>
            </div>

            {user.email === item.addedBy &&<div className="w-full flex items-center justify-center px-3 gap-5">
                <button onClick={handleUpdate} className="py-2 w-full flex items-center justify-center rounded-lg bg-green-500 text-white">Edit</button>
                <button onClick={handleDelete} className="py-2 w-full flex items-center justify-center rounded-lg bg-red-500 text-white">Delete</button>
            </div>}
        </div>
    )
}

export default Card