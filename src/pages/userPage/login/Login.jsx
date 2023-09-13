import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h1>Panun<span>Keshur</span> Store</h1>
                </div>
                <div className="loginRight">
                    <div className="heading">
                        <h2>Welcome!</h2>
                    </div>
                    <form action="POST">
                        <input type="text" required placeholder="Username" />
                        <input type="password" required placeholder="Password" />
                        <button className="loginButton" type="submit">Login</button>
                    </form>
                    <div className="loginLinks">
                        <Link to="/forgotPassword" className="forgotPassword">Forgot Password</Link>
                        <Link to="/register" className="loginRegisterButton">Register</Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
