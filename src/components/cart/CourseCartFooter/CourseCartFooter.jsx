import React from 'react';

import { useSelector} from 'react-redux';

import './CourseCartFooter.css'

const CourseCartFooter = () => {
    
    const amountPrice = useSelector(({courses}) => courses.amountPrice);
    
    return (
        <footer className="basket__footer">
            <div className="basket__footerWrapper">
                <div className="basket__footerNav">
                    <h2 className="basket__footerTitle">Заказ на сумму:</h2>
                    <p className="basket__footerPrice">{amountPrice} ₽</p>
                </div>
                <button className="basket__footerBtn">Оформить заказ</button>
            </div>
        </footer>
    )
}

export default CourseCartFooter;