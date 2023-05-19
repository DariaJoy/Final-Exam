import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getCartList } from "../../store/reducers/courses";

import { CourseCard } from "../../components/index";
import { CoursesHeader } from "../../components/index";

import axios from "axios";

import './MainCoursesPage.css'

const MainCoursesPage = () => {
    const [courses, setCourses] = useState([]);

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCartList())
        .then((result) => console.log(result));

        axios.get('http://localhost:3001/courses')
        .then(({ data }) => setCourses(data));        
    }, []);

    return (
        <>
            <CoursesHeader title={"наша продукция"}/>
            <div className="wrapper">

                    <main className="wrapper__products">
                        {courses.map((course) => <CourseCard key={course.id} course={course}/>)}
                    </main>
                    
                </div>
        </>
    )

};

export default MainCoursesPage;