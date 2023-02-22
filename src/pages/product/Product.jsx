import React, {useEffect, useState} from 'react';
import axios from "../../context/axios/axios";
import {useNavigate, useParams} from "react-router-dom";
import Slider from "../../components/slider/Slider";

const Product = () => {
    const nav = useNavigate()
    const {id} = useParams()
    const [product,setProduct] = useState({})
    useEffect(() => {
        axios(`/products/${id}`)
            .then(({data}) => setProduct(data))
    },[])
    if (JSON.stringify(product) === '{}'){
        return <h2>
            not found
        </h2>
    }
    return (
       <>
           <section className={'product'}>
               <h2 className="product__title" onClick={() => nav(-1)}>
                   go back
               </h2>
               <div className="product__row">
                   <div className="product__left">
                       <img className={'product__img'} src={product.image} alt=""/>
                   </div>
                   <div className="product__right">
                       <h2 className="product__right__title">
                           {product.title}
                       </h2>
                       <p className="product__desc">
                           {product.desc}
                       </p>
                       <p className="product__weight">
                           Вес:  {product.weight}
                       </p>
                       <div className="product__btn-cont">
                           <button className="product__btn">
                               Корзина
                           </button>
                           <p className="product__price">
                               {product.price} ₽
                           </p>
                       </div>
                       <div className="product__list">
                          <div className="product__under-list">
                              <p className="product__line">
                                  Белки
                              </p>
                              <p className="product__line-under">
                                  {product.protein}
                              </p>
                          </div>
                           <div className="product__under-list">
                               <p className="product__line">
                                   Жиры
                               </p>
                               <p className="product__line-under">
                                   {product.fats}
                               </p>
                           </div>
                           <div className="product__under-list">
                               <p className="product__line">
                                   Углеводы
                               </p>
                               <p className="product__line-under">
                                   {product.carbohydrates}
                               </p>
                           </div>
                           <div className="product__under-list">
                               <p className="product__line">
                                   Ккал
                               </p>
                               <p className="product__line-under">
                                   {product.calories}
                               </p>
                           </div>
                           <div className="product__under-list">
                               <p className="product__line">
                                   Вес
                               </p>
                               <p className="product__line-under">
                                   {product.weight} r
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
           <Slider title={'с этим товаром покупают'}/>
       </>
    );
};

export default Product;