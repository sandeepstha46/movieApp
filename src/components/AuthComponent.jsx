import React from 'react'
import LoginComponent from './commonComponents/LoginComponent'
import RegisterComponent from './commonComponents/RegisterComponent'

export default function AuthComponent() {
    return (
            <div className={`authentication`}>
                <div className="authentication__content">
                    <div className="authentication__close">
                        <i className="bi bi-x"></i>
                    </div>
                    <LoginComponent />
                    <RegisterComponent />
                </div>
            </div>
    )
}