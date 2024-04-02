import { Blog } from "../hooks/useBlogs"

const FullBlog = ({blog} : {blog: Blog}) => {
  return (
    <div className="grid grid-cols-12 max-w-4xl bg-orange-300 items-baseline">
        <div className="col-span-8">
            <div className="">
                {blog.title}
            </div>
            <div>
                {new Date().toDateString()}
            </div>
            <div>
                {blog.content}
            </div>
        </div>
        <div className="col-span-4">
            {blog.author.name || 'Anonymous'}
        </div>
    </div>
  )
}

export default FullBlog