import React from 'react'
// import { Link } from "react-router-dom";
import "./navbar.css"
import { Link } from "react-router-dom";
import RightSideBar from '../rightSideBar/RightSideBar';

export default function Navbar() {

    const openRightSideBar = () => {
        document.querySelector(".rightSideBar").classList.add("open")
    }
    
    return (
        <div className="nav_container">
            <div className="leftSide">
            <Link to="/" className="logoLink">
                    <h1>Panun<span>Keshur</span> Store</h1>
                </Link>
            </div>
            <div className="center">
                    <span className="searchBarIcon">
                        <img className='searchbarIcon' src="/assets/images/Topsearch.png" alt="" />
                    </span>
                    <input type="text" className="navSearchInput" placeholder="Search here for any product..." />
            </div>
            <div className="rightSide">
                <div className="navUserImg">
                    <div className="cart">
                        <Link to="/cart">
                            <img src="/assets/images/cart.png" alt="" />
                        </Link>
                        <span className="cartCount">0</span>
                    </div>
                    {/* <img src={user.profilePicture ? PF + user.profilePicture : PF+"noAvatar.png"} alt="img"/> */}
                        <img src="/assets/images/user.png" onClick={openRightSideBar}  alt="user" />
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}
