import { Link,NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className='nav_list'>
                <NavLink className='nav_link' to='/' activeClassName="selected">
                    <li>Home</li>
                </NavLink>
                <NavLink className='nav_link' to='/shop'>
                    <li>Shop</li>
                </NavLink>
                <NavLink className='nav_link' to='/'>
                    <li>Cart</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
