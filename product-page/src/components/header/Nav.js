import './Nav.css';
import logo from '../../Assets/Logo.png';
import { MdPersonOutline } from 'react-icons/md';
import { BiShoppingBag } from 'react-icons/bi';

export default function Navbar() {
    return (
        <>
            <div className="Nav-bar">
                <div className='logo'>
                    {/*Always add image using {add the image inside this bracket}*/}
                    <img
                        src={logo}
                        alt='website logo'
                        id='logo'
                    />
                </div>
                <div className='nav-content'>
                    <ul>
                        <li>
                            <a href='#'>Collections</a>
                        </li>

                        <li>
                            <a href='#'>About</a>
                        </li>

                        <li>
                            <a href='#'>Contact</a>
                        </li>

                        <li>
                            <a href='#'> <MdPersonOutline
                                size={"1.5rem"}
                                className="account-icon"
                            />Account</a>
                        </li>

                        <li>
                            <a href='#'> <BiShoppingBag
                                size={"1.4rem"}
                                className="shopping-icon"
                            />Shopping</a>
                        </li>
                    </ul>
                </div>
            </div>
            <span><hr className='nav-line'/></span>
        </>
    )
}
