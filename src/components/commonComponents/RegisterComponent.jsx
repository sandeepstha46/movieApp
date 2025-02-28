import React from 'react'

export default function RegisterComponent() {
    return (
        <div className="register">
            <p className="authentication__type text-center">Register</p>
            <div className="authentication__input">
                <form action="" method="post">
                    <div className="authentication__input--type authentication__name">
                        {/*<!-- <span class="error-message">Please enter a valid name</span> -->*/}
                        <input type="text" name="name" className="auth__input" placeholder="Jhon Doe" required/>
                    </div>
                    <div className="authentication__input--type authentication__email">
                        {/*<!-- <span class="error-message">Please enter a valid email</span> -->*/}
                        <input type="email" name="email" className="auth__input"
                               placeholder="jhondoe@domain.com"
                               pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/" required/>
                    </div>
                    <div className="authentication__input--type authentication__password">
                        {/*<!-- <span class="error-message">Password must be atleast 8 characters</span> -->*/}
                        <input type="password" name="password" className="auth__input password__type"
                               placeholder="●●●●●●●●" required/>
                        <i className="bi bi-eye-slash toggle__visibilty"></i>
                    </div>
                    <div className="authentication__input--type authentication__password">
                        {/*<!-- <span class="error-message">Password must be atleast 8 characters</span> -->*/}
                        <input type="password" name="confirm-password"
                               className="auth__input password__type confirm-password" placeholder="●●●●●●●●"
                               required/>
                        <i className="bi bi-eye-slash toggle__visibilty"></i>
                    </div>
                    <div className="submit-button__login">
                        <button className="btn primary-button login__button" type="submit">Register</button>
                    </div>
                </form>
                <p className="no__account text-end">
                    Already have an account?
                    <span className="log-in">Log in</span>
                </p>
            </div>
        </div>
    )
}