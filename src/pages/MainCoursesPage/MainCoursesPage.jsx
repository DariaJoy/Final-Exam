import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { CourseCard } from "../../components/index";
import { CoursesHeader } from "../../components/index";

import axios from "axios";

import './MainCoursesPage.css'
import { useNavigate } from "react-router-dom";

const MainCoursesPage = () => {
    const [courses, setCourses] = useState([]);

    const username = useSelector(({users}) => users.username);

    const navigate = useNavigate()

    useEffect(()=>{
        if (username) {
            axios.get('http://localhost:3001/courses')
        .then(({ data }) => setCourses(data));
        } else {
            navigate('/auth')
        }        
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