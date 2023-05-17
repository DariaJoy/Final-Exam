import React from "react";

import { useSelector } from "react-redux";
import { CourseCartCard } from '../../components/index';
import { CourseCartHeader } from '../../components/index';
import { CourseCartFooter } from '../../components/index'

import './CoursesCartPage.css';

const CoursesCartPage = () => {
    const courseList = useSelector(({courses}) => courses.list);

    return (
        <>
            <CourseCartHeader/>
            <div className="basket__wrapper">
                <main className="basket__wrapperItems">
                    {!courseList.length && <h2 className='basket__title'>Ваша корзина пуста</h2>}
                        {courseList?.map(course => {
                            return (
                                <CourseCartCard 
                                    key={course.id}
                                    id={course.id}
                                    image={course.image}
                                    title={course.title}
                                    price={course.price}/>
                                )
                        })};
                </main>
            </div>
            <CourseCartFooter/>
        </>
    );
};

export default CoursesCartPage;