import React, {useEffect, useState} from 'react';
import {createContext} from "react";
import axios from "./axios/axios";

export const CustomContext = createContext()



 export const Context = (props) => {

    const addBasket = (item) => {
        setBasket(prev => [...prev,{
            ...item,
            count: 1
        }])
    }
    const plusOneBasket = (id) => {
        setBasket(prev => prev.map(item => {
            if (item.id === id){
                return {...item, count: item.count + 1}
            } else{
                return item
            }
        }))
    }
     const minusOneBasket = (id) => {
         let count = basket.find(item => item.id === id).count
         if (count === 1){
             setBasket(prev => prev.filter(item => item.id !==id))
         }
          else{
                 setBasket(prev => prev.map(item => {
                     if (item.id === id){
                         return {...item, count: item.count - 1}
                     } else{
                         return item
                     }
                 }))
             }
         }
         const delBasket = (id) =>{
        setBasket(prev => prev.filter(item => item.id !== id))
     }
     const [show,setShow] = useState(false)
     const [product,setProduct] = useState([])
     const [user,setUser] = useState({
        email: ""
    })
     const [basket,setBasket] = useState([])
    const value = {
        user,
        setUser,
        product,
        setProduct,
        basket,
        setBasket,
        show,
        setShow,
        addBasket,
        plusOneBasket,
        minusOneBasket,
        delBasket
    }
    useEffect(() => {
        if (localStorage.getItem('user') !== null){
            setUser(JSON.parse(localStorage.getItem('user')))
        }
        if (localStorage.getItem("basket") !== null){
            setBasket(JSON.parse(localStorage.getItem("basket")))
        }
    },[])
     useEffect(() => {
         localStorage.setItem("basket",JSON.stringify(basket))
     },[basket])
    return (
        <CustomContext.Provider value={value}>
            {props.children}
        </CustomContext.Provider>
    );
};
