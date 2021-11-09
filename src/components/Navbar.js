import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import SAMSUNG_LOGO from '../img/logo_samsung_black.svg';
import './Navbar.css'
import CartImg from '../img/cart.svg'
import PersonImg from '../img/person.svg'
import SearchImg from '../img/search.svg'
import Dropdown from './Dropdown';
import TransformEffect from './TransformEffect';

function Navbar() {
    const [click, setClick] = useState(false);
    const clickHandler = () => setClick(!click);

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }; 

    <TransformEffect dropdown={dropdown}/>
    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    <img src={SAMSUNG_LOGO} alt="삼성로고" />
                </Link>
                <div className="menu-icon" onClick={clickHandler}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            제품
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            기획전
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            스토리
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            고객 서비스
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            멤버십
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                        디지털프라자
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                        사회공헌
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            비즈니스
                        </Link>
                    </li>
                </ul>
                <ul className="nav-menu-right">
                        <li className="nav-item-icon">
                            <img src={SearchImg} />
                        </li>
                        <li className="nav-item-icon">
                            <img src={CartImg} />
                        </li>
                        <li className="nav-item-icon" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <Link>
                            <img src={PersonImg} /> 
                            {dropdown && <Dropdown/>}
                            </Link>
                        </li>
                    </ul>
            </nav>
            {dropdown && <TransformEffect/>}
        </>
    )
}

export default Navbar
