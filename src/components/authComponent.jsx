import React from 'react'
import { Outlet, useOutletContext } from "react-router-dom";
import LoginComponent from './commonComponents/loginComponent'
import RegisterComponent from './commonComponents/registerComponent'

export default function AuthComponent() {

    const status = useOutletContext();

    return (
            <div className={`authentication`}>
                <div className="authentication__content">
                    <div className="authentication__close">
                        <i className="bi bi-x"></i>
                    </div>
                    <Outlet context={status} />
                    <LoginComponent />
                    <RegisterComponent />
                </div>
            </div>
    )
}