import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';
import getImgUrl from '../../utils/getImgUrl';


const CartPage = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2)

  const handleClick = (e) => {
    if (isCartEmpty) {
      e.preventDefault();
      Toast.fire({
        icon: "error",
        iconColor: "#ff7970",
        title: "Cannot proceed to Checkout",
        text: "Add items to proceed to checkout!",
        color: "#ff7970",
        background: "white)"
      });
    }
  }

  const isCartEmpty = cartItems.length < 1;

  const Toast= Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });

  const dispatch = useDispatch()

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product))
  }

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <div className="flex mt-12 h-full flex-col overflow-hidden bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <div className="text-2xl font-bold text-blue-950">Shopping cart</div>
            <div className="ml-3 flex h-7 items-center ">
              <button                
                type="button"
                onClick={handleClearCart}
                className="relative -m-2 py-1 px-2 font-semibold bg-red-500 text-white rounded-md hover:bg-secondary transition-all duration-200  "
              >
                <span className="">Clear Cart</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="flow-root">

              {
                cartItems.length > 0 ? (
                  <ul role="list" className="-my-6 divide-y divide-gray-200">

                    {
                      cartItems.map((product) => (
                        <li key={product._id} className="flex py-6">
                          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              alt=""
                              src={`${getImgUrl(product?.coverImage)}`}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex flex-wrap justify-between text-base font-medium text-gray-900">
                                <h3 className="text-blue-950 font-bold">
                                  <Link to='/'>{product?.title}</Link>
                                </h3>
                                <p className="sm:ml-4">${product?.newPrice}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500 capitalize"><strong>Category:</strong> {product?.category}</p>
                            </div>
                            <div className="flex flex-1 flex-wrap items-end justify-between space-y-2 text-sm">
                              <p className="text-gray-500"><strong>Qty:</strong> 1</p>

                              <div className="flex">
                                <button
                                onClick={() => handleRemoveFromCart(product)}
                                type="button" className="font-medium text-red-600 hover:text-red-500">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    }
                                  
                  </ul>
                ) : (<p>No products found!</p>)
              }
                              
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p className='font-semibold text-2xl mb-4'>Subtotal</p>
            <p className='text-2xl font-bold text-red-500'>${totalPrice ? totalPrice: 0}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
          <div className="mt-6">
            <Link              
              to="/checkout"
              onClick={handleClick}            
              className="flex items-center justify-center rounded-md border border-transparent bg-blue-950 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-900"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            {
              cartItems.length > 0 ? 
              <Link to="/">
                or 
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
              : 
              <Link to="/">
                <button
                  type="button"
                  className="font-medium text-secondary hover:text-indigo-500 ml-1"
                >
                  Visit the store to pick your read
                </button>
              </Link>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage