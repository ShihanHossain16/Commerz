import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'

function Header() {
  return (
    <header>
      <div className="bg-green-200">
        <div className="text-sm max-w-360 mx-auto py-1 lg:px-8 px-5">Free Delivey on Your First Order!</div>
      </div>
      <div className="max-w-360 mx-auto py-3 lg:px-6 px-5 flex justify-between items-center">
        <Link>
          <span className='text-3xl text-green-500 font-bold'>X</span>
          <span className='text-3xl text-slate-800 font-bold'>ECOMM</span>
        </Link>

        <nav className="text-md text-gray-800 space-x-5 flex items-center">
          <Link className='hover:text-green-500' to={'/'}>Home</Link>
          <Link className='hover:text-green-500' to={'/shop'}>Shop</Link>
          <Link className='hover:text-green-500' to={'/'}>Mens</Link>
          <Link className='hover:text-green-500' to={'/'}>Wormen</Link>
          <Link className='hover:text-green-500' to={'/'}>Kids</Link>
          <Link className='relative'>
            <span className="bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-4.5">0</span>
            <IoCartOutline />
          </Link>

          <Link className='bg-green-400 px-3 py-2 ms-3 text-md rounded-md text-gray-800'>
            Login
          </Link>

        </nav>


      </div>
    </header>
  )
}

export default Header