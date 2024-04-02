import { Link } from "react-router-dom"


const Appbar = () => {
  return (
    <div>
        <div className='flex justify-between items-center bg-gray-800 p-3 text-white'>
            <div className='text-2xl font-bold'>Blog App</div>
            <div className='flex gap-5'>
            <Link to='/publish'>
                
            </Link>
            <div>Home</div>
            <div>Blogs</div>
            <div>About</div>
            <div>Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Appbar