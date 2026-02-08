import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='max-w-auto mx-auto  lg:px-8 px-5'>
      <div className='bg-green-300 rounded-lg  p-10 gap-y-5 grid grid-cols-1 lg:grid-cols-3'>
        <div className="lg:pr-20">
          <Link>
            <span className='text-xl text-white font-bold'>X</span>
            <span className='text-xl text-slate-800 font-bold'>ECOMM</span>
          </Link>
          <p className='text-gray-800 mt-2 text-sm font-semibold'>Your destination for everyday fashion essentials.</p>
        </div>
        <div className='flex flex-col'>
          <h2 className="text-xl text-gray-800 font-bold mb-3">Quick Links</h2>
          <Link className='hover:underline'>Login</Link>
          <Link className='hover:underline'>Register</Link>
          
        </div>
        <div className='flex flex-col'>
          <h2 className="text-xl text-gray-800 font-bold mb-3">Contact</h2>
          <Link className='hover:underline'>+8801612211500</Link>
          <Link className='hover:underline'>dummy@gmail.com</Link>
          <p>dhaka,mirpur</p>
          
        </div>
      </div>
      <div className="text-sm text-center py-3">&copy: All Rights Reserved 2026</div>
    </div>
  )
}

export default Footer