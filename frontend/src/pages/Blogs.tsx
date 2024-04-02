import Appbar from "../components/Appbar";
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks/useBlogs"

const Blogs = () => {

    const {loading, blogs} = useBlogs();

    if(loading){
       return <div>Loading... Please wait for a while...</div>
    }   

  return (
    <div className="max-w-4xl flex flex-col mx-auto">
        <Appbar/>
        {blogs.map(blog => {
            return <BlogCard key={blog.id} 
                id={blog.id}
                title={blog.title} 
                content={blog.content} 
                author={blog.author.name || 'Anonymous'} 
                //publish date to current date
                publishedDate={new Date().toDateString()} 
                />
        })}
    </div>
  )
}

export default Blogs