import React, {useEffect, useState} from 'react';
import Title from "../../components/title/title";
import axios from "../../context/axios/axios";
import Map from "../home/Map/Map";

const Sales = () => {
    const [sales,setSales] = useState([])
    useEffect(() => {
        axios('/sales')
            .then(({data}) => setSales(data))
    },[])
    return (
        <>
            <section className={'sales'}>
                <Title title={'sales'}/>
                <div className="sales__content">
                    {
                        sales.map(item => (
                            <div  key={item.id} className="sales__card">
                                <img src={item.image} alt="" className="sales__card__img"/>
                                <h3 className="sales__card__title">
                                    {item.title}
                                </h3>
                                <p className="sales__card__desc">
                                    {item.desc}
                                </p>
                                <p className="sales__card__data">
                                    {item.data}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>
            <Map/>
        </>

    );
};

export default Sales;