const openDrawer = () => {
    const drawer = document.querySelector('.drawer') as HTMLElement;
    if (drawer) {
        drawer.classList.toggle('hidden');
    }
}
const Header = () => {
    return ( 
        <header className="flex items-center py-4 px-8  md:px-0 gap-4 md:gap-18 md:border-b border-gray-400 ">
            <img src="/icon-menu.svg" alt="Menu" className="h-4 w-4 md:hidden cursor-pointer hover:opacity-70 transition-opacity" onClick={openDrawer} />
            <img src="/logo.svg" alt="Logo" className="h-5 w-auto" />
            <nav className="flex md:justify-between justify-end items-center w-full gap-8">
                <ul className="md:flex hidden items-center gap-8 py-10 border-amber-600 text-gray-500">
                    <li><a href="#home" className="hover:text-gray-900 py-10 hover:border-b-4 hover:border-amber-500 transition-all">Collections</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-10 hover:border-b-4 hover:border-amber-500 transition-all">Men</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-10 hover:border-b-4 hover:border-amber-500 transition-all">Women</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-10 hover:border-b-4 hover:border-amber-500 transition-all">About</a></li>
                    <li><a href="#" className="hover:text-gray-900 py-10 hover:border-b-4 hover:border-amber-500 transition-all">Contact</a></li>
                </ul>

                <ol className="flex items-center  gap-4 md:gap-16">
                  <li><img src="/icon-cart.svg" alt="Cart" className="h-6 w-6 cursor-pointer hover:opacity-100 md:opacity-80 transition-opacity" /></li>
                    <li><img src="/image-avatar.png" alt="Avatar" className=" h-8 w-8 md:h-14 md:w-14 rounded-full cursor-pointer hover:ring-2 hover:ring-orange-300 transition-all" /></li>
                </ol>
            </nav>
        </header>
     );
}
 
export default Header;