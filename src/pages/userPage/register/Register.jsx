import "./register.css"

export default function Register() {
    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="heading">
                    <h1>Register</h1>
                </div>
                <div className="formContainer">
                    <form className="registerForm">
                        <div className="formGroup">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" required placeholder="Enter your name" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" required placeholder="Enter your username" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" required placeholder="Enter your email" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" id="phone" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" required placeholder="Enter your password" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" id="password" required placeholder="Confirm your password" />
                        </div>
                        <div className="formGroup">
                            <button className="registerBtn">Register</button>
                        </div>
                    </form>

                    <div className="loginLink">
                        <p>Already have an account? <span>Login</span></p>
                    </div>

                </div>
            </div>
        </div>
    )
}
