import { Link,NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className='nav_list'>
                <NavLink className='nav_link' to='/'>
                    <li>Home</li>
                </NavLink>
                <NavLink className='nav_link' to='/shop'>
                    <li>Shop</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Nav;
