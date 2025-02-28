import React from 'react'

export default function loginComponent() {
    return (
        <div className={`login`}>
            <p className="authentication__type text-center">Login</p>
            <div className="authentication-welcome text-center">
                <p className="authentication-welcome__title">Welcome</p>
                <p className="authentication-welcome__subtitle">Login to access an amazing content.</p>
            </div>
            <div className="authentication__input">
                <form action="" method="post">
                    <div className="authentication__input--type authentication__email">
                        {/*
                        <!-- <span class="error-message">Please enter a valid email</span> -->
                        */}
                        <input type="email" name="email" className="auth__input"
                               placeholder="jhondoe@domain.com"
                               pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" required/>
                    </div>
                    <div className="authentication__input--type authentication__password">
                        {/*<!-- <span class="error-message">Password must be atleast 8 characters</span> -->
                        */}
                        <input type="password" name="password" className="auth__input password__type"
                               placeholder="●●●●●●●●" required/>
                        <i className="bi bi-eye-slash toggle__visibilty"></i>
                    </div>
                    <div className="forgot__password text-end pt-1">
                        <a href="javascriptvoid(0)">Forgot Password?</a>
                    </div>
                    <div className="submit-button__login">
                        <button className="btn primary-button login__button" type="submit">Login</button>
                    </div>
                </form>
                <p className="no__account text-center pt-3">
                    Don't have an account?
                    <span className="sign-up text-white ps-1">Sign Up</span>
                </p>
            </div>
        </div>
    )
}