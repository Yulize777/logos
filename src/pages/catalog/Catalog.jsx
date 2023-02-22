import React, {useEffect, useState} from 'react';
import Card from "../../components/card/Card";
import axios from "../../context/axios/axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import {menuData} from "../../context/menuData";
import CategorySelect from "./categorySelect/CategorySelect";
import OrderSelect from "./orderSelect/OrderSelect";
import SearchInput from "./searchInput/SearchInput";

const Catalog = () => {
    const {category} = useParams()
    const [product,setProduct] = useState([])
    const nav = useNavigate()
    const [order,setOrder] = useState('default')
    const [title,setTitle] = useState('')
    useEffect(() => {
        let categories = `${category !== 'all' ? 'category=' + category + "&" : ''}`
        const selectOrder = () => {
            switch(order) {
                case 'asc': {
                    return `_sort=price&_order=asc&`
                }
                case 'desc': {
                    return `_sort=price&_order=desc&`
                }
                case 'abc': {
                    return `_sort=title&_order=desc&`
                }
                case 'weight': {
                    return `_sort=weight&_order=desc&`
                }
                case 'calories': {
                    return `_sort=calories&_order=asc&`
                }
                default : {
                    return ''
                }
            }
        }
        let orders = selectOrder()
        let titleFilter = `${title.length !== 0 ? `title_like=` + title + '&' : ""}`
        axios(`/products?${categories}${orders}${titleFilter}`)
            .then(({data}) => setProduct(data) )
    },[category,order,title])
    return (
        <section className={'catalog'}>
            <div className="catalog__content">
                <aside className={'catalog__aside'}>
                    <CategorySelect/>
                    <OrderSelect order={order} setOrder={setOrder}/>
                    <SearchInput title={title} setTitle={setTitle}/>
                </aside>
                <div className="catalog__row">
                    <h2 className={'catalog__title'}>
                        <Link className={'catalog__title'} to={'/'}>Главная</Link> / {category !== 'all' ?  menuData.find(item => item.en === category).ru : 'all categories'}
                    </h2>
                    <div className="catalog__right">
                        {
                            product.map(item => (
                                <Card key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Catalog;