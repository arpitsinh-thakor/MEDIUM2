import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export interface Blog {
    id: string,
    title: string,
    content: string,
    author:{
        name: string
    },
}

export const useBlogs = () =>{
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/bulk`,
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                setBlogs(response.data.posts)
                setLoading(false)
            })
    }, [])

    return {loading, blogs}
}

export const useBlog = (id: string) =>{
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/post/get/${id}`,
        {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((response) => {
                setBlog(response.data.post)
                setLoading(false)
            })
    }, [])

    return {loading, blog}
}