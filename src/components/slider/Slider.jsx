import React, {useContext, useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay} from 'swiper'
import Title from "../title/title";
import axios from "../../context/axios/axios";
import Card from "../card/Card";
import {CustomContext} from "../../context/Context";
const Slider = ({title}) => {
    const {product} = useContext(CustomContext)
    return (
        <div className={'slider'}>
            <Title title={title}/>
            <div className="slider__cont">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000
                    }}
                    speed={2000}
                    modules={[Autoplay]}
                    className="mySwiper"
                    style={{marginLeft:"90px",marginRight: "90px"}}
                >
                    {
                        product.map(item => (
                            <SwiperSlide key={item.id} className={'slider__card'}>
                                {<Card  item={item}/>}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;