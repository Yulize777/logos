import React from 'react';
import Title from "../../components/title/title";
import {useNavigate} from "react-router-dom";

const Ordering = () => {
    const nav = useNavigate()
    return (
        <section className={'ordering'}>
            <p onClick={() => nav('/basket')} className="ordering__link">
                в корзину
            </p>
            <Title title={'Оформление заказа'}/>
            <form  className="ordering__form">
                <div className="ordering__first">
                    <p className="ordering__first__title">
                        1. Контактная информация
                    </p>
                    <div className="ordering__first__cont">
                        <input placeholder={'Name'} type="text" className="ordering__first__input"/>
                        <input placeholder={'PhoneNumber'} type="text" className="ordering__first__input"/>
                    </div>
                </div>
                <div className="ordering__second">
                    <p className="ordering__first__title">
                        2. Доставка
                    </p>
                    <div className="ordering__second__cont">
                        <button className="ordering__second__btn1">
                            Доставка
                        </button>
                        <button className="ordering__second__btn2">
                            Самовывоз
                        </button>
                        <p className="ordering__second__time">
                            Доставим через  1 час 30 минут
                        </p>
                    </div>
                    <p className="ordering__second__address">
                        Адрес доставки
                    </p>
                    <div className="ordering__second__block">
                        <input placeholder={'indicate the street'} type="text" className="ordering__second__input"/>
                        <input placeholder={'house number'} type="text" className="ordering__second__input"/>
                        <input placeholder={'apartments number'} type="text" className="ordering__second__input"/>
                        <input placeholder={'entrance'} type="text" className="ordering__second__input"/>
                        <input placeholder={'floor'} type="text" className="ordering__second__input"/>
                        <input placeholder={'comment'} type="text" className="ordering__second__input"/>
                    </div>
                </div>
                <div className="ordering__third">
                    <p className="ordering__first__title">
                        3. Оплатить
                    </p>
                    <div className="ordering__third__cont">
                        <button className="ordering__third__btn">
                            online payment
                        </button>
                        <button className="ordering__third__btn">
                            courier by card
                        </button>
                        <button className="ordering__third__btn">
                            by cash
                        </button>
                        <button className="ordering__third__btn">
                            relinquishment
                        </button>
                    </div>
                </div>
                <div className="ordering__fourth">
                    <p className="ordering__first__title">
                        4. Когда доставить
                    </p>
                    <div className="ordering__fourth__cont">
                        <div className="ordering__fourth__cont2">
                            <button className="ordering__fourth__btn">
                                nearest time
                            </button>
                            <button className="ordering__fourth__btn">
                                in time
                            </button>
                            <input placeholder={'indicate the time'} type="time" className="ordering__fourth__input"/>
                        </div>

                        <div className="ordering__fourth__amount">
                            <p className="ordering__fourth__amount__title">
                                Кол-во персон
                            </p>
                            <span>
                                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="14" height="2" fill="white"/>
</svg>

                            </span>
                            <p>1</p>
                            <span className={'ordering__fourth__amount__sign'}>+</span>
                        </div>
                        <p className="ordering__fourth__call">
                            Хотите мы позвоним?
                        </p>
                        <label className={'ordering__fourth__label'}>
                            <input name={'recall'}  type="radio" className="ordering__fourth__radio"/>
                            <p className="ordering__fourth__radio__title">
                                dont recall
                            </p>
                        </label>
                        <label className={'ordering__fourth__label'}>
                            <input name={'recall'}  type="radio" className="ordering__fourth__radio"/>
                            <p className="ordering__fourth__radio__title">
                                operator call required
                            </p>
                        </label>
                    </div>
                </div>
                <div className="ordering__fifth">
                    <label className="ordering__fifth__label">
                        <input  type="checkbox" className="ordering__fifth__checkbox"/>
                        <p className="ordering__fifth__title">
                            Я согласен на обработку моих перс. данных в соответствии с Условиями
                        </p>
                    </label>
                    <button className="ordering__fifth__btn">
                        checkout
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Ordering;