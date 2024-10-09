import React, { useState } from 'react'
import { useAuth } from '../Auth/AuthProbider';
import toast from 'react-hot-toast';

export const AddBlogs = ({ setTab }) => {
    const { user, updateData } = useAuth()

    const [formData, setFormData] = useState({
        name: updateData?.name || '',
        category: updateData?.category || '',
        description: updateData?.description || '',
        addedBy: user?.email || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (updateData) {
            const updatedBlog = {
                ...formData,
            };
    
            const response = await fetch(`${import.meta.env.VITE_API_URL}/blogsUpdate/${updateData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedBlog),
            });
    
            if (response) {
                setTab('Preview');
                toast.success('Blogs Updated Succesfully')
                setFormData({ name: '', category: '', description: '', addedBy: user?.email || '' });
            }
        } else {
            const newBlog = {
                ...formData,
                createdAt: new Date().toISOString().split('T')[0],
            };

            const response = await fetch(`${import.meta.env.VITE_API_URL}/addblogs`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBlog),
            });
            if (response) {
                setTab('Preview')
                toast.success('Blogs Created Succesfully')
                setFormData({ name: '', category: '', description: '', addedBy: user?.email || '' });
            }
        }
    };


    return (
        <div className='flex items-center justify-center flex-col pt-10 px-4'>
            <h2 className='text-2xl font-bold mb-6'>Add a New Blog</h2>
            <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg p-8 w-full max-w-lg'>
                <div className='mb-4'>
                    <label htmlFor="name" className='block text-gray-700 font-bold mb-2'>Blog Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]'
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="category" className='block text-gray-700 font-bold mb-2'>Category:</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]'
                    >
                        <option value="">Select Category</option>
                        <option value="Web Development">Web Development</option>
                        <option value="AI">AI</option>
                        <option value="Design">Design</option>
                    </select>
                </div>

                <div className='mb-4'>
                    <label htmlFor="description" className='block text-gray-700 font-bold mb-2'>Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-[#6C5DD3]'
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="addedBy" className='block text-gray-700 font-bold mb-2'>Added By:</label>
                    <input
                        type="email"
                        id="addedBy"
                        name="addedBy"
                        value={formData.addedBy}
                        required
                        readOnly
                        className='border border-gray-300 rounded-md w-full p-2 bg-gray-100 cursor-not-allowed'
                    />
                </div>

                <button type="submit" className='bg-[#6C5DD3] text-white font-bold py-2 px-4 rounded hover:bg-[#5140bf] transition duration-200 w-full'>
                    {updateData ? "Update Blog": "Add Blog"}
                </button>
            </form>
        </div>
    )
}
