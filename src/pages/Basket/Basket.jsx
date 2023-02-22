import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Title from "../../components/title/title";
import {CustomContext} from "../../context/Context";
const Basket = () => {
    const nav = useNavigate()
    const {basket,setBasket,plusOneBasket,minusOneBasket,delBasket} = useContext(CustomContext)
    const result = basket.reduce((acc,rec) => {
        return acc + rec.price * rec.count
    },0)
    return (
        <section className={'basket'}>
            <Link to={'/catalog/all'} className="basket__link">
                к выбору блюда
            </Link>
            <div className="basket__top">
                <Title  title={'КОРЗИНА'}/>
                <p className="basket__quantity">
                    {
                        basket.length === 1
                            ?  `в корзине ${basket.length} товар`
                            : `в корзине ${basket.length} товара`
                    }
                </p>
            </div>
            {
                basket.length >= 4 ? <button onClick={() => setBasket([])} className="basket__result__btn">
                    УДАЛИТЬ ВСЕ ЗАКАЗЫ
                </button> : ''
            }
            <ul className="basket__list">
                {
                    basket.map(item => (
                        <li key={item.id} className={`${basket.length === 1 ? 'basket__line1' : "basket__line"}`}>
                            <img width={117} height={86} src={item.image} alt=""/>
                            <div className="basket__cont">
                                <h3 className="basket__title">
                                    {item.title}
                                </h3>
                                <p className="basket__desc">
                                    {item.desc}
                                </p>
                            </div>
                            <div className="basket__cont2">
                                <span onClick={() => minusOneBasket(item.id)}>
<svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="26.9718" cy="26.972" r="13.486" fill="#72A479"/>
</svg>


                                </span>
                                <p>
                                    {item.count}
                                </p>
                                <span onClick={() => plusOneBasket(item.id)}>
<svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="27.0719" cy="26.972" r="13.486" fill="#72A479"/>
<g clipPath="url(#clip0_69_476)">
<path d="M31.2771 25.6967H28.3463V22.766C28.3463 22.046 27.7416 21.4566 27.0213 21.4566C26.301 21.4566 25.6962 22.046 25.6962 22.766V25.6967H22.7655C22.0454 25.6967 21.4561 26.3015 21.4561 27.0218C21.4561 27.7421 22.0454 28.3469 22.7655 28.3469H25.6962V31.2776C25.6962 31.9976 26.301 32.587 27.0213 32.587C27.7416 32.587 28.3463 31.9976 28.3463 31.2776V28.3469H31.2771C31.9971 28.3469 32.5865 27.7421 32.5865 27.0218C32.5865 26.3015 31.9971 25.6967 31.2771 25.6967Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_69_476">
<rect width="11.1304" height="11.1304" fill="white" transform="translate(21.4561 21.4566)"/>
</clipPath>
</defs>
</svg>

                                </span>
                            </div>
                            <p className="basket__price">
                                {item.price * item.count} ₽
                            </p>
                            <span onClick={() => delBasket(item.id)} className="basket__close">
                                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19.7285" cy="19.0721" r="13.486" transform="rotate(45 19.7285 19.0721)" fill="#72A479"/>
<g clipPath="url(#clip0_69_470)">
<path d="M23.6035 21.1437L21.5311 19.0713L23.6035 16.999C24.1126 16.4898 24.1018 15.6455 23.5924 15.1361C23.0831 14.6268 22.2387 14.6159 21.7296 15.1251L19.6572 17.1974L17.5849 15.1251C17.0757 14.6159 16.2314 14.6268 15.722 15.1361C15.2127 15.6455 15.2018 16.4898 15.711 16.999L17.7833 19.0713L15.711 21.1437C15.2018 21.6528 15.2127 22.4972 15.722 23.0065C16.2314 23.5159 17.0757 23.5267 17.5849 23.0176L19.6572 20.9452L21.7296 23.0176C22.2387 23.5267 23.0831 23.5159 23.5924 23.0065C24.1018 22.4972 24.1126 21.6528 23.6035 21.1437Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_69_470">
<rect width="11.1304" height="11.1304" fill="white" transform="translate(19.6572 11.2009) rotate(45)"/>
</clipPath>
</defs>
</svg>

                            </span>
                        </li>
                    ))
                }
            </ul>
            <div className="basket__result">
                <div className="basket__result__left">
                    <h3 className="basket__result__title">
                        Итого: {result}
                    </h3>
                    <p className="basket__result__desc">
                        {
                            result > 1500 ? `вы можете оформить бесплатную доставку.Ваш cashback 5%, итого ${result * 5 / 100} ₽ ` : `До бесплатной доставки не хватет: ${1500 - result} ₽`
                        }
                    </p>
                    <p className="basket__result__subtitle">
                        Минимальная сума заказа 1500 ₽
                    </p>
                </div>
                <button  onClick={() => nav('/ordering' +
                    '')} className="basket__result__btn">
                    Оформить заказ
                </button>
            </div>
        </section>
    );
};

export default Basket;
