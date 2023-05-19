import React from "react";

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from "../../../store/reducers/users";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons';

import './CoursesHeader.css'

const CoursesHeader = ({title}) => {
    const counter = useSelector(({courses}) => courses.counter)
    const amountPrice = useSelector(({courses}) => courses.amountPrice);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const onCartButtonClickHandler = () => {
        navigate("/cart");
    }

    let onLogout = () => {
        navigate("/auth");
        dispatch = (logout());
    }

    function declOfNum(n, text_forms) {  
    n = Math.abs(n) % 100; 
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
}

    return (
        <header className="header__wrapper">
            <h1 className="header__title">{title}</h1>
            <nav>
                <p className="header__cartInfo">В Вашей корзине {counter} {declOfNum(counter, ['товар', 'товара', 'товаров'])} на {amountPrice} ₽</p>
                <button className="header__btn" onClick={onCartButtonClickHandler}><FontAwesomeIcon icon={faBasketShopping} size="2xl" style={{color: "#ffffff",}} /></button>
                <button className="header__btn-exit" onClick={onLogout}>Выйти</button>
            </nav>
        </header>
    );
};

export default CoursesHeader;