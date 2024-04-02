import { Link } from "react-router-dom"


interface BlogCardProps {
    id: string,
    title: string,
    content: string,
    author: string,
    publishedDate: string,
}

const BlogCard = ({
    id,
    title,
    content,
    author,
    publishedDate
}: BlogCardProps) => {
  return (
    <Link to={`/blog/get/${id}`}>
    <div className='bg-green-400 shadow-lg rounded-lg flex flex-col gap-1 m-2 p-2 cursor-pointer'>
        <div className="flex flex-row items-center gap-2">
            <div><Avatar name={author}/></div>
            <div className="font-bold underline italic">{author}</div>
            <div> {publishedDate}</div>
        </div>
        <div className="font-bold text-2xl">
            {title}
        </div>
        <div className="text-xl">
            {content.slice(0, 200) + '...'}
        </div>
        <div>
            {content.length > 200 && 'Read more'}
        </div>
        <div>
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
    </div>
    </Link>
  )
}

function Avatar({name} : {name: string}){
    return <span className='w-10 h-10 bg-green-400 rounded-full flex items-center justify-center'>
            <img className="rounded-full"
               src={`https://ui-avatars.com/api/?name=${name}&background=random&size=200&rounded=true`} alt="" />
        </span>
}

export default BlogCard