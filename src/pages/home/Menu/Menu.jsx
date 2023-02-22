import Reac, {useContext, useEffect} from 'react';
import Slider from "../../../components/slider/Slider";
import {useNavigate} from "react-router-dom";
import {menuData} from "../../../context/menuData";
import {CustomContext} from "../../../context/Context";
import axios from "../../../context/axios/axios";

const Menu = () => {
const {setProduct} = useContext(CustomContext)
    const nav = useNavigate()

    useEffect(() => {
        axios('/products')
            .then(({data}) => setProduct(data))
    },[])
    return (
        <section className={'menu'}>
            <ul className="menu__list">
                {
                    menuData.map(item => (
                        <li  key={item.ru} className="menu__line" onClick={() => nav(`catalog/${item.en}`)}>
                            {item.ru}
                        </li>
                    ))
                }
                </ul>
            <Slider title={'Холодные закуски'}/>
            <Slider title={'Горячие закуски'}/>
            <Slider title={'Мясные блюда'}/>
        </section>
    );
};

export default Menu;