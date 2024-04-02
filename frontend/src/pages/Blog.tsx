import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import { useBlog } from "../hooks/useBlogs";

export const Blog = () => {
    const {id} = useParams();
    const {loading, blog} = useBlog(id || "");
    console.log(id)
    console.log(blog)

    
    if(loading){
        return <div>Loading... Please wait for a while...</div>
    }
    if(!blog){
        return <div>Blog not found</div>
    }
    

    return (
        <div>
            <FullBlog blog = {blog}/>
        </div>
    )
}