import React from 'react'
// import { Link } from "react-router-dom";
import "./navbar.css"

export default function Navbar() {
    return (
        <div className="nav_container">
            <div className="leftSide">
            {/* <Link to="/" className="logoLink"> */}
                    <h1>Panun<span>Keshur</span> Store</h1>
                {/* </Link> */}
            </div>
            <div className="center">
                    <span className="searchBarIcon">
                        <img className='searchbarIcon' src="./assets/images/search.png" alt="" />
                    </span>
                    <input type="text" className="navSearchInput" placeholder="Search here for any product..." />
            </div>
            <div className="rightSide">
                <div className="navLinks">
                    <ul>
                        <li className="active">Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div className="navUserImg">
                {/* <Link to={`profile/${user._id}`} style={{textDecoration: 'none'}}>
                    <img src={user.profilePicture ? PF + user.profilePicture : PF+"noAvatar.png"} alt="img"/>
                </Link> */}
                    <img src="./assets/images/user.png"  alt="user" />
                </div>
            </div>
        </div>
    )
}
