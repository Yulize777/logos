import React, {useContext} from 'react';
import {SwiperSlide} from "swiper/react";
import {useNavigate} from "react-router-dom";
import {CustomContext} from "../../context/Context";

const Card = ({item}) => {
    const nav = useNavigate()
    const {addBasket,basket,plusOneBasket,minusOneBasket} = useContext(CustomContext)
    return (
        <SwiperSlide key={item.id} className={'slider__card'}>
            <div className="slider__card__img-cont">
                <img  onClick={() => nav(`/product/${item.id}`)} src={item.image} alt="" className="slider__card__img"/>
            </div>
            <div className="slider__main-cont">
                <div className="slider__card__cont">
                    <h3 className="slider__card__title">
                        {item.title}
                    </h3>
                    <p className="slider__card__subtitle">
                        Вес:  {item.weight} г
                    </p>
                </div>
                <p className="slider__card__subtitle">
                    {item.desc}
                </p>
                {
                    basket.findIndex(el => el.id === item.id) > -1
                        ? <div className="slider__buy">
                            <button onClick={() => plusOneBasket(item.id)} className="slider__btn__sign">
                                +
                            </button>
                            <h3 className="slider__card__title">
                                {item.price} ₽
                            </h3>
                            <button onClick={() => minusOneBasket(item.id)} className="slider__btn__sign">
                                -
                            </button>
                            <div className="slider__circle">
                                {
                                    basket.find(el => el.id === item.id).count
                                }
                            </div>
                        </div>
                        : <div className="slider__card__end-cont">
                            <h3 className="slider__card__title">
                                {item.price} ₽
                            </h3>
                            <button type={'button'} onClick={() => addBasket(item)} className="slider__card__btn">
                                В корзину
                                <span>
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5.42226 17.8203C5.84426 17.8203 6.18726 18.1633 6.18726 18.5853C6.18726 19.0073 5.84426 19.3493 5.42226 19.3493C5.00026 19.3493 4.65826 19.0073 4.65826 18.5853C4.65826 18.1633 5.00026 17.8203 5.42226 17.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M16.6747 17.8203C17.0967 17.8203 17.4397 18.1633 17.4397 18.5853C17.4397 19.0073 17.0967 19.3493 16.6747 19.3493C16.2527 19.3493 15.9097 19.0073 15.9097 18.5853C15.9097 18.1633 16.2527 17.8203 16.6747 17.8203Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M0.749878 1.25L2.82988 1.61L3.79288 13.083C3.87088 14.018 4.65188 14.736 5.58988 14.736H16.5019C17.3979 14.736 18.1579 14.078 18.2869 13.19L19.2359 6.632C19.3529 5.823 18.7259 5.099 17.9089 5.099H3.16388" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.1254 8.79504H14.8984" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                                </span>
                            </button>
                        </div>
                }

            </div>

        </SwiperSlide>
    );
};

export default Card;