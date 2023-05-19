import React, { useState } from "react";

import { useDispatch } from 'react-redux';

import axios from "axios";

import { login } from "../../store/reducers/users";
import { useNavigate } from "react-router-dom";

import './AuthPage.css'

const AuthView = () => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onLogin = () => {
        axios.post('http://localhost:3001/login', { email, password })
            .then(({data}) => dispatch(login({ 
                accessToken: data.accessToken, 
                ...data.user, 
            })));
            navigate("/")
    };

    const onInputEmail = ({ target }) => {
        const { value } = target;
        setEmail(value); 
    };

    const onInputPassword = ({ target }) => {
        const { value } = target;
        setPassword(value);
    };


    return (
        <>
            <h1 className="auth__form-title">вход</h1>
            <input placeholder="Логин" className="auth__form-input" type="email" value={email} onInput={onInputEmail}/>
            <input placeholder="Пароль" className="auth__form-input" type="password" valeu={password} onInput={onInputPassword}/>
            <button className="auth__form-submit" onClick={onLogin}>Войти</button>
        </>
    )
};



const RegView = () => {
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onRegister = () => {
        axios.post('http://localhost:3001/register', {email, password})
            .then((result) => console.log(result));
            navigate("/")
    };

    const onInputEmail = ({ target }) => {
        const { value } = target;
        setEmail(value); 
    };

    const onInputPassword = ({ target }) => {
        const { value } = target;
        setPassword(value); 
    };

    const onInputChecked = () => {

    };

    return (
        <>
            <h1 className="auth__form-title">Регистрация</h1>
            <input placeholder="Логин" className="auth__form-input" type="email" value={email} onInput={onInputEmail}/>
            <input placeholder="Пароль" className="auth__form-input" type="password" value={password} onInput={onInputPassword}/>
            <label className="auth__form-lable">
                <input className="auth__form-checkbox" type="checkbox" onInput={onInputChecked}/>
                <span className="auth__form-span"></span>
                </label>
            <button className="auth__form-submit" onClick={onRegister}>Зарегистрироваться</button>
        </>
    )
};

const AuthPage = () => {
    const [isAuthView, setAuthViewState] = useState(false);
    
    const toggleView = () => setAuthViewState(prevState => !prevState);

    return (
        <div className="auth__wrapper">
            <section className="auth__bg">
                <div className="auth__form">
                    <button className="auth__form-link" onClick={toggleView}>{ isAuthView ? 'Зарегистрироваться' : 'Авторизоваться' }</button>
                    {isAuthView ? <AuthView/> : <RegView/>}
                </div>
            </section>
        </div>
    )
};

export default AuthPage;