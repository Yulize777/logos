import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {CustomContext} from "../../context/Context";
import axios from "../../context/axios/axios";

const Login = () => {
    const {setUser} = useContext(CustomContext)
    const nav = useNavigate()
    const loginUser = (e) => {
        e.preventDefault()
        let newUser = {
            email: e.target[0].value,
            password: e.target[1].value
        }

        axios.post('/login', newUser)
            .then(({data}) => {
                setUser({
                    token: data.accessToken,
                    ...data.user
                })
                localStorage.setItem('user', JSON.stringify({
                    token: data.accessToken,
                    ...data.user
                }))
                nav('/')
            })
            .catch(err => console.log(err.message))
    }
    return (
        <div className={'content'}>
            <form  className="form" onSubmit={loginUser}>
                <h2 className="form__title">
                    login to logos
                </h2>
                <input type="email" className="form__input" placeholder='enter email'/>
                <input type="password" className="form__input" placeholder='enter password'/>
                <Link className={'form__link'} to={'/register'}>
                    create account
                </Link>
                <button className="form__btn">
                    login
                </button>
            </form>
        </div>
    );
};

export default Login;