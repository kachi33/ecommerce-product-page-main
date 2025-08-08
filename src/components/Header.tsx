const Header = () => {
    return ( 
        <header>
            <img src="/logo.svg" alt="Logo" />
            <nav>
                <ul>
                    <li><a href="#home">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <ol>
                  <li>  <img src="/icon-cart.svg" alt="Cart" /></li>
                    <li><img src="/image-avatar.png" alt="Avatar" /></li>
                </ol>
            </nav>
        </header>
     );
}
 
export default Header;