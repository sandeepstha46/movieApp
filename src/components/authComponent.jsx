import React from 'react'
import LoginComponent from './commonComponents/loginComponent'
import RegisterComponent from './commonComponents/registerComponent'

export default function AuthComponent() {
    return (
            <div className="authentication">
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