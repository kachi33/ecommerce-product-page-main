import { useState } from 'react';
import type { CartItem } from '../hooks/useCart';

const openDrawer = () => {
    const drawer = document.querySelector('.drawer') as HTMLElement;
    if (drawer) {
        drawer.classList.toggle('hidden');
    }
}

interface HeaderProps {
  cartItems: CartItem[];
  getTotalItems: () => number;
  removeFromCart: (id: number) => void;
}

const Header = ({ cartItems, getTotalItems, removeFromCart }: HeaderProps) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    return ( 
        <header className="flex items-center py-4 px-8  md:px-0 gap-4 md:gap-18 md:border-b border-gray-300 ">
            <img src="/icon-menu.svg" alt="Menu" className="h-4 w-4 md:hidden cursor-pointer hover:opacity-70 transition-opacity" onClick={openDrawer} />
            <img src="/logo.svg" alt="Logo" className="h-5 w-auto" />
            <nav className="flex md:justify-between justify-end items-center w-full gap-8">
                <ul className="md:flex hidden items-center gap-8 py-8 md:py-0 border-amber-600 text-gray-500">
                    <li><a href="#home" className="hover:text-gray-900 py-8 hover:border-b-4 hover:border-amber-500 transition-all">Collections</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-8 hover:border-b-4 hover:border-amber-500 transition-all">Men</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-8 hover:border-b-4 hover:border-amber-500 transition-all">Women</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-8 hover:border-b-4 hover:border-amber-500 transition-all">About</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-8 hover:border-b-4 hover:border-amber-500 transition-all">Contact</a></li>
                </ul>

                <ol className="flex items-center gap-4 md:gap-16">
                  <li className="relative">
                    <div className="relative">
                      <img src="/icon-cart.svg" alt="Cart" className="h-6 w-6 cursor-pointer hover:opacity-100 md:opacity-80 transition-opacity" onClick={toggleCart} />
                      {getTotalItems() > 0 && (
                        <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                          {getTotalItems()}
                        </span>
                      )}
                    </div>
                    {isCartOpen && (
                      <div className="absolute top-14 md:top-12 -right-19 md:right-0 w-96 max-w-96 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                        <div className="p-6">
                          <h3 className="text-lg font-semibold mb-4 text-gray-900">Cart</h3>
                          <div className="border-b border-gray-200 mb-4"></div>
                          
                          {cartItems.length === 0 ? (
                            <div className="text-center py-12">
                              <p className="text-gray-500 font-medium">Your cart is empty.</p>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-4">
                                  <img src={item.image} alt={item.name} className="w-12 h-12 rounded object-cover" />
                                  <div className="flex-1">
                                    <h4 className="text-sm text-gray-600 truncate">{item.name}</h4>
                                    <p className="text-sm">
                                      <span className="text-gray-500">${item.price.toFixed(2)} x {item.quantity}</span>
                                      <span className="font-bold text-gray-900 ml-2">${(item.price * item.quantity).toFixed(2)}</span>
                                    </p>
                                  </div>
                                  <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                  >
                                    <img src="/icon-delete.svg" alt="Delete" className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                              <button className="w-full bg-amber-600 text-black font-bold py-4 rounded-lg hover:bg-amber-500 transition-colors mt-6">
                                Checkout
                              </button>
                            </div>
                          )}
                         
                        </div>
                      </div>
                    )}
                  </li>
                    <li><img src="/image-avatar.png" alt="Avatar" className=" h-8 w-8 md:h-14 md:w-14 rounded-full cursor-pointer hover:ring-2 hover:ring-orange-300 transition-all" /></li>
                </ol>
            </nav>
            
            {isCartOpen && (
              <div className="fixed inset-0 z-40" onClick={toggleCart}></div>
            )}
        </header>
     );
}
 
export default Header;