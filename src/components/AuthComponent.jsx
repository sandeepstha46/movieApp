import React from 'react'
import LoginComponent from './commonComponents/LoginComponent'
import RegisterComponent from './commonComponents/RegisterComponent'
import {Navigate, useLocation, useNavigate} from "react-router-dom";

export default function AuthComponent() {

    const Location = useLocation()

    const navigate = useNavigate()

    const handleClick = (e) => {
        navigate("/")
    }

    return (
            <div className="authentication authentication-active">
                <div className="authentication__content">
                    <div onClick={handleClick} className="authentication__close">
                        <i className="bi bi-x"></i>
                    </div>

                    {
                        Location.pathname === "/login" ? (
                            <LoginComponent />
                        ) : Location.pathname === "/register" ? (
                            <RegisterComponent />
                        ) : (
                            <Navigate to="/" replace />
                        )
                    }

                </div>
            </div>
    )
}