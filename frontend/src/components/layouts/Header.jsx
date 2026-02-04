import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="bg-green-200">
        <div className="text-sm max-w-360 mx-auto py-1 lg:px-8 px-5">Free Delivey on Your First Order!</div>
      </div>
      <div className="max-w-360 mx-auto py-1 lg:px-8 px-5 flex justify-between">
        <Link>
          <span>X</span>
          <span>ECOMM</span>
        </Link>
      </div>
    </header>
  )
}

export default Header