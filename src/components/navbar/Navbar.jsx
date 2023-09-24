import React, { useEffect, useState } from 'react'
// import { Link } from "react-router-dom";
import "./navbar.css"
import { Link } from "react-router-dom";
import RightSideBar from '../rightSideBar/RightSideBar';
import axios from '../../api/axios';

export default function Navbar() {
    const userId = "650db1f17d52aa044bfb1abe"

    const [cart, setCart] = useState([])
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getCart = async () => {
            try{
                const res = await axios.get(`/cart/${userId}`)
                isMounted && setCart(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getCart();
        return () => {
            isMounted = false;
            controller.abort();
        }
    },[userId])
    console.log("cart at nva bar: ", cart)
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
                    <Link to="/admin">
                        <button className='dashboardBtn'>dashboard</button>

                    </Link>
                    <div className="cart">
                        <Link to="/cart">
                            <img src="/assets/images/cart.png" alt="" />
                        </Link>
                        <span className="cartCount">
                        {
                            cart 
                            ? cart.products 
                                ? cart.products.length
                                : 0 
                            : 0
                        }
                        </span>
                    </div>
                    {/* <img src={user.profilePicture ? PF + user.profilePicture : PF+"noAvatar.png"} alt="img"/> */}
                        <img src="/assets/images/user.png" onClick={openRightSideBar}  alt="user" />
                </div>
            </div>
            <RightSideBar />
        </div>
    )
}
