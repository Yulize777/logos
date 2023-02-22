import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className="anchor">
                <a className={'anchor__arrow'} href="#">
                    <span >
                <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0607 0.939577C12.4749 0.353795 11.5252 0.353801 10.9394 0.939592L1.3935 10.4856C0.807718 11.0714 0.807724 12.0211 1.39351 12.6069C1.9793 13.1927 2.92905 13.1927 3.51483 12.6069L12.0001 4.12156L20.4854 12.6068C21.0712 13.1926 22.0209 13.1926 22.6067 12.6068C23.1925 12.021 23.1925 11.0712 22.6067 10.4855L13.0607 0.939577ZM13.5001 4.0001L13.5 2.00023L10.5 2.00025L10.5001 4.00012L13.5001 4.0001Z" fill="#222021"/>
</svg>
</span>
                </a>
            </div>

            <div className="footer__row">
                <div className="footer__left">
                    <Link className="footer__title" to={'/'}>
                        LOGOS
                    </Link>
                    <p className="footer__subtitle">
                        © ООО СК «АПШЕРОН» <br/>
                        Все права защищены. 2010-2020
                    </p>
                    <Link  className={'footer__link'} to={'/'}>
                        Пользовательское соглашение
                    </Link>
                    <Link  className={'footer__link'} to={'/'}>
                        Карта сайта
                    </Link>
                    <Link  className={'footer__link'} to={'/'}>
                        Политика конфиденциальности

                    </Link>
                </div>
                <div className="footer__right">
                    <Link className={'footer__replace'} to={'/'}>
                        О ресторане
                    </Link>
                    <Link className={'footer__replace'} to={'/delivery'}>
                        Условия доставки
                    </Link>
                    <Link className={'footer__replace'} to={'/'}>
                        Возврат товара
                    </Link>
                    <Link className={'footer__replace'} to={'/sales'}>
                        Акции
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;