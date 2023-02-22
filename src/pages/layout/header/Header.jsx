import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineLogin,AiOutlineLogout} from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faMagnifyingGlass,faPhoneVolume} from '@fortawesome/free-solid-svg-icons'
import {CustomContext} from "../../../context/Context";
import BasketZero from "../../basketZero/BasketZero";
const Header = () => {
    const {user,setUser,basket,setBasket,setShow} = useContext(CustomContext)
    const nav = useNavigate()
    const logout = () => {
        setUser({
            email:''
        })
        localStorage.removeItem('user')
        nav('/register')
    }
    return (
        <header className={'header'}>
            <div className="container">
                <nav className="header__nav">
                    <Link className={'header__title'} to={'/'}>
                        LOGOS
                    </Link>
                    <div className="header__input-cont">
                        <FontAwesomeIcon className={'header__map'} icon={faLocationDot}  />
                        <input type="text" className="header__input" placeholder={'Введите адрес доставки'}/>
                        <FontAwesomeIcon className={'header__search'} icon={faMagnifyingGlass}/>
                    </div>
                    <div className="header__contact-cont">
                        <div>
                            <FontAwesomeIcon className={'header__tel'} icon={faPhoneVolume} />
                        </div>
                        <div>
                            <p className="header__subtitle">
                                Контакты:
                            </p>
                            <a href="" className="header__link">
                                +7 (917) 510-57-59
                            </a>
                        </div>
                        {
                            user.email.length ? <span onClick={logout} style={{color:"white",display: 'flex',fontSize: '26px',columnGap:'5px',marginLeft:'10px',alignItems:'center',cursor:'pointer'}}>
                                <AiOutlineLogout/>
                                logout
                            </span> :
                                <Link to='/register'  style={{color:"white",display: 'flex',fontSize: '26px',columnGap:'5px',marginLeft:'10px',alignItems:'center'}}>
                                    <AiOutlineLogin/>
                                    <p>register</p>
                                </Link>
                        }

                        <button onClick={() => {
                            if (!basket.length) {
                                setShow(true)
                            } else{
                                nav('/basket')
                            }
                        }} className="header__btn">
                            Корзина
                            <span className={'header__btn-icon'}>
                                {basket.length}
                            </span>
                        </button>
                    </div>
                </nav>
            </div>
            <BasketZero/>
        </header>
    );
};

export default Header;