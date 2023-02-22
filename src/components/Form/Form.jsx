import React, {useContext, useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import {FaPencilAlt} from 'react-icons/fa'
import {AiFillEye,AiFillEyeInvisible} from "react-icons/ai"
import axios from "axios";
import {CustomContext} from "../../context/Context";
const Form = () => {
    const [status,setStatus] = useState(false)
    const [value,setValue] = useState('')
    const [eye,setEye] = useState(false)
    const nav = useNavigate()
    const registerForm = (e) => {
        e.preventDefault()
        let newUser = {
            email : value,
            password : e.target[0].value
        }
        axios.post('http://localhost:8080/register', newUser)
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
     const {user,setUser} = useContext(CustomContext)

    return (
        <div className={'content'}>
            <form className={'form'} onSubmit={registerForm}>

                {
                    status && <p className="form__email" onClick={() => setStatus(false)}> {value} <FaPencilAlt/></p>
                }

                {
                    <h2 className="form__title">
                        {
                            status ? 'make your password up' : "register"
                        }
                    </h2>
                }

                {
                    status &&
                    <>
                        <div style={{position : "relative"}}>
                            <input type={eye ? "text" : 'password'} className="form__input" placeholder={'make up password'}/>
                            <span className={'form__eye'} onClick={() => setEye(prev => !prev)}>{eye ? <AiFillEye/> : <AiFillEyeInvisible/>}</span>
                        </div>
                        <button className="form__btn" type={'submit'}>
                            create the account
                        </button>
                    </>
                }
                {
                    !status &&
                    <>
                        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="form__input" placeholder={'enter email'}/>

                        <div className="form__btn" onClick={() => setStatus(true)} >
                            continue
                        </div>

                        <Link className={'form__link'} to={'/login'}>
                            i have an account
                        </Link>
                    </>
                }




            </form>
        </div>
    );
};

export default Form;