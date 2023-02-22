import React from 'react';
import {menuData} from "../../context/menuData";
import {useForm} from "react-hook-form";
import axios from "../../context/axios/axios";
import {useNavigate} from "react-router-dom";
const AddProduct = () => {
    const nav = useNavigate()
    const {
        reset,
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm({mode:"onBlur"})

    const addProduct = (data) => {
        const newProduct = {
            ...data,
            calories: data.protein * 4 + data.fats * 9 + data.carbohydrates * 4
        }
        axios.post('/products',newProduct)
            .then(() => {
                nav('/')
                reset()
            })
    }
    return (


        <section className={'admin'}>
            <form onSubmit={handleSubmit(addProduct)} className="admin__form">
                <h2 className="admin__title">
                    new product
                </h2>
                <label className="admin__label">
                    <span className="admin__span">
                        enter title
                    </span>
                    <input {...register('title',{
                        required:{
                            value: true,
                            message: 'please fill title'
                        }
                    })} placeholder={'title'} type="text" className="admin__input"/>
                    <p style={{color:"red"}}>{errors.title && errors.title.message }</p>
                </label>
                <label className="admin__label">
                    <span className="admin__span">
                        enter description
                    </span>
                    <input {...register('desc',{
                        required:{
                            value: true,
                            message: 'please fill desc'
                        }
                    })} placeholder={'description'} type="text" className="admin__input"/>
                    <p style={{color:"red"}}>{errors.desc && errors.desc.message }</p>
                </label>
                <label className="admin__label">
                    <span className="admin__span">
                        insert image
                    </span>
                    <input {...register('image',{
                        required:{
                            value: true,
                            message: 'please insert your image'
                        }
                    })} placeholder={'image'} type="text" className="admin__input"/>
                    <p style={{color:"red"}}>{errors.image && errors.image.message }</p>
                </label>
                <div className="admin__cont">
                    <label className="admin__label">
                    <span className="admin__span">
                        price
                    </span>
                        <input {...register('price',{
                            required:{
                                value: true,
                                message: 'please indicate price'
                            }
                        })} placeholder={0} type="number" className="admin__input"/>
                        <p style={{color:"red"}}>{errors.price && errors.price.message }</p>
                    </label>
                    <label className="admin__label">
                    <span className="admin__span">
                        weight
                    </span>
                        <input {...register('weight',{
                                   required:{
                                   value: true,
                                   message: 'please indicate weight'
                               }
                               })} placeholder={0} type="number" className="admin__input"/>
                        <p style={{color:"red"}}>{errors.weight && errors.weight.message }</p>
                    </label>
                </div>
                <div className="admin__cont">
                    <label className="admin__label">
                    <span className="admin__span">
                        carbohydrates
                    </span>
                        <input {...register('carbohydrates',{
                            required:{
                                value: true,
                                message: 'please indicate carbohydrates'
                            }
                        })} placeholder={0} type="number" className="admin__input"/>
                        <p style={{color:"red"}}>{errors.carbohydrates && errors.carbohydrates.message }</p>
                    </label>
                    <label className="admin__label">
                    <span className="admin__span">
                        protein
                    </span>
                        <input {...register('protein',{
                            required:{
                                value: true,
                                message: 'please indicate protein'
                            }
                               })} placeholder={0} type="number" className="admin__input"/>
                        <p style={{color:"red"}}>{errors.protein && errors.protein.message }</p>
                    </label>
                    <label className="admin__label">
                    <span className="admin__span">
                        fats
                    </span>
                        <input {...register('fats',{
                            required:{
                                value: true,
                                message: 'please indicate fats'
                            }
                        })} placeholder={0} type="number" className="admin__input"/>
                        <p style={{color:"red"}}>{errors.fats && errors.fats.message }</p>
                    </label>
                </div>
                <select {...register('category',{
                    required:{
                        value: true,
                        message: 'please choose the category'
                    }
                })} className="admin__select">
                    <option value="choose category">choose category</option>
                    {
                       menuData.map(item => (
                           <option key={item.en} value={item.en}>
                               {item.ru}
                           </option>
                       ))
                    }
                </select>
                <p style={{color:"red"}}>{errors.category && errors.category.message }</p>
                <button className="admin__btn">
                    add product
                </button>
            </form>
        </section>
    );
};

export default AddProduct;