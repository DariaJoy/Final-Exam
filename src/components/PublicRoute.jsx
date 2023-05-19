import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PublicRoute = ({children}) => {
    const user = useSelector(({ users }) => users.email);
    if (user) return <Navigate to={'/'} replace/>;
    return children;
}

export default PublicRoute;