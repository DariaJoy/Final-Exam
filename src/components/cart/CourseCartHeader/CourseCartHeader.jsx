import React, { useState } from 'react';

import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../store/reducers/users.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

import './CourseCartHeader.css'

const CourseCartHeader = () => {
    const [hover, setHover] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onBackButtonClickHandler = () => {
        navigate("/");
    }

    let onLogout = () => {
        navigate("/auth");
        dispatch = (logout());
    }

    return (
        <header className="basket__wrapperHeader">
            <nav>
                <button
                onMouseOver={() => setHover(false)}
                onMouseLeave={() => setHover(true)} 
                className="basket__bth" 
                onClick={ onBackButtonClickHandler }>
                    <FontAwesomeIcon icon={faArrowLeftLong} 
                    size="lg" 
                    style={ hover ? { color: "#D58C51" } : {color: "#FFFFFF"} }/> </button>
            </nav>
            <h1 className="basket__titelHeader">Корзина с выбранными товарами</h1>
            <button className="header__btn-exit" onClick={onLogout}>Выйти</button>
        </header>
    )
};

export default CourseCartHeader;