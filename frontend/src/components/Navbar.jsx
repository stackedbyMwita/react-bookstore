import { useState } from 'react';
import { FaRegHeart, FaSearch, FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

const navigation = [
  {name:"Dashboard", href:"/dashboard"},
  {name:"Orders", href:"/orders"},
  {name:"Cart Page", href:"/cart"},
  {name:"Check Out", href:"/checkout"}
]

const Navbar = () => {

  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const cartItems = useSelector(state => state.cart.cartItems)

  const currentUser = false;
  return (
    <>
      <header className="max-w-screen-2xl mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className='flex items-center md:gap-16'>
            <Link to="/">
              <FaBarsStaggered className='text-3xl text-blue-950'/>
            </Link>
            <div className='relative sm:w-72 w-40 space-x-1'>
              <FaSearch className='absolute inline-block left-3 inset-y-2 text-blue-950'/>
              <input type="text" placeholder='Search here' className='bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none'/>
            </div>
          </div>
          <div className='relative flex items-center md:space-x-3 space-x-2'>
            <div className='items-center'>
              {
                currentUser? <>
                  <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                    <img src="src/assets/avatar.png" alt="Mwita" className={`size-7 rounded-full ${currentUser? 'ring-1 ring-gray-400' : ''}`}/>
                  </button>
                  {/* Show dropdowns */}
                  {
                    isDropDownOpen && (
                      <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40'>
                        <ul className='py-2'>
                          {
                            navigation.map((item) => (
                              <li key={item.name} onClick={() => setIsDropDownOpen(false)}>
                                <Link to={item.href} className='block px-4 py-2 text-sm hover:bg-gray-100'>
                                  {item.name}
                                </Link>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    )
                  }

                </> : <Link to="/login"><FaUserAlt size={20}/></Link>
              }
            </div>
            <button className='hidden sm:block'>
              <FaRegHeart size={20} className='text-blue-950'/>
            </button>

            <Link to="/cart" className='bg-yellow-400 p-1 sm:px-6 flex px-2 items-center'>
              <FaShoppingCart size={16} className='text-blue-950'/>
              {
                cartItems.length > 0 ? <span className='text-sm font-semibold sm:ml-1'>{cartItems.length}</span> : <span className='text-sm font-semibold sm:ml-1'>0</span>
              }
              
            </Link>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar