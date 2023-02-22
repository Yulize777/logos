import React, { useEffect, useState} from 'react';
import Title from "../../components/title/title";
import DeliveryCard from "../../components/deliveryCard/DeliveryCard";
import axios from "../../context/axios/axios";
const Delivery = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        axios('/delivery')
            .then(({data}) => setData(data) )
    },[])
    return (
        <>
            <section className={'delivery'}>
                <Title title={'delivery terms'}/>
                <div className="delivery__row">
                    <div className="delivery__lBlock">
                        {
                          data.map((item) => (
                              <DeliveryCard key={item.id} item={item}/>
                          ))
                        }
                    </div>
                    <div className="delivery__rBlock">

                    </div>
                </div>
                <div className="delivery__schedule">
                    <div className="delivery__sCont">
                        <h3 className="delivery__card_title">
                            График работы доставки:
                        </h3>
                        <p className="delivery__des">
                            с 10:00-21:00
                        </p>
                    </div>
                    <div className="delivery__sCont">
                        <h3 className="delivery__card_title">
                            График работы кафе:
                        </h3>
                        <p className="delivery__des">
                            с 08:00-21:00
                        </p>
                    </div>
                </div>
                <div className="delivery__end">
                    <h3 className="delivery__card_title">
                        Минимальный заказ:
                    </h3>
                    <p className="delivery__des">
                        Бесплатная доставка пешим курьером при сумме заказа от 400 ₽ <br/>
                        Доставка оператором такси от любой суммы заказа - по тарифам <br/>
                        перевозчика.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Delivery;
