import './Nav.css';
import logo from '../../Assets/Logo.png';
import { BsPerson } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Navbar() {
    return (
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
                        <a href='#'> <BsPerson 
                        size={"1.4rem"}
                        />Account</a>
                    </li>

                    <li>
                        <a href='#'>Shoping</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
