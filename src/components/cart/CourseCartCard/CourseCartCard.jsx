import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { removeFromCartList } from '../../../store/reducers/courses';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import './CourseCartCard.css'

const CourseCartCard = ({ id, title, image, price }) => {
    const [hover, setHover] = useState(true);

    const dispatch = useDispatch()
   
    const onRemove = () => {
        dispatch(removeFromCartList ({ id }));
        removeFromCartList (prevState => !prevState );
    }

    return (
         <section className="basket__card">
            <div className="basket__cardWrapper">
                <img className="basket__cardImage" src={image} alt=""/>
                <h2 className="basket__cardTitle">{title}</h2>
                <div className="basket__cardNav">
                    <p className="basket__cardValue">{price} ₽ </p>
                    <button
                    onMouseOver={() => setHover(false)}
                    onMouseLeave={() => setHover(true)} 
                    className="basket__cardRemove" 
                    onClick={onRemove}>
                        <FontAwesomeIcon icon={faXmark} size="xl" style={ hover ? { color: "#D58C51" } : {color: "#FFFFFF"} }/>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default CourseCartCard;