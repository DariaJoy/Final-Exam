import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const user = useSelector(({ users }) => users.email);
    if (!user) return <Navigate to={'/auth'} replace/>;
    return children;
};

export default PrivateRoute