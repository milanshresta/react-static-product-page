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
                            <a href='#'>Showcase</a>
                        </li>

                        <li>
                            <a href='#'>Who we are</a>
                        </li>

                        <li>
                            <a href='#'>Support</a>
                        </li>
                        <li>
                            <a href='#'> <BiShoppingBag
                                size={"1.4rem"}
                                className="shopping-icon"
                            />Cart</a>
                        </li>
                        <li>
                            <a href='#'> <MdPersonOutline
                                size={"1.5rem"}
                                className="account-icon"
                            /></a>
                        </li>

                    </ul>
                </div>
            </div>
            <span><hr className='nav-line' /></span>
        </>
    )
}
