import axios from 'axios'
import React, { useState } from 'react'
import { BACKEND_URL } from '../config'
import { useNavigate } from 'react-router-dom'

const Publish = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

  return (
    <div className='flex flex-col items-center mx-auto m-8 gap-2'>
        <div className='text-2xl font-bold'>Publish Blog</div>
        <input type="text" placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className='p-2 border border-gray-400 rounded-lg'/>
        
        <textarea 
            placeholder="Content" value={content} 
            onChange={(e) => setContent(e.target.value)} 
            className='p-2 border border-gray-400 rounded-lg'/>

        <button 
            className='bg-green-400 text-white p-2 rounded-lg'
            onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/post`,
                    {
                        title,
                        content
                    },
                    {
                        headers: {
                            Authorization: localStorage.getItem('token')
                        }
                    })  
                navigate(`/blog/get/${response.data.post.id}`)
            }}
        >Publish</button>

    </div>
  )
}

export default Publish