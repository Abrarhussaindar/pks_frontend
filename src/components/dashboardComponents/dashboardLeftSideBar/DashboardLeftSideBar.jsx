import { Link } from "react-router-dom"
import "./dLeftSideBar.css"

export default function dashboardLeftSideBar() {
    return (
        <div className="dLeftSideBarContainer">
            <div className="dLSTop">
                <Link to="/" className="logoLink">
                    <h1>Panun<span>Keshur</span> Store</h1>
                </Link>

                <div className="dashboardLeft">
                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                    <span>Dashboard</span>
                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                </div>
            </div>
            <div className="dLSBottom">
                <div className="topBottom">
                    <div className="clientsContainer">
                        <h3>Client Facing</h3>
                        <ul>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Products</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Customers</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Transactions</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            {/* <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span></span>
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div className="salesContainer">
                        <h3>Sales</h3>
                    <ul>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Overview</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Daily</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Monthly</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Breakdown</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="managementContainer">
                        <h3>Manager</h3>
                    <ul>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Admin</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img className="homeImg" src="/assets/images/home.png" alt="" />
                                    <span>Performance</span>
                                    <img className="rightImg" src="/assets/images/next.png" alt="" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="adminDetailsContainer">
                    <img className="adminProfilePicture" src="/assets/images/me.jpg" width="50px" alt="" />
                    <div className="adminDetails">
                        <h4>name</h4>
                        <p>designation</p>
                    </div>
                    <img className="downArrow" src="/assets/images/down-white.png" alt="" />
                </div>
            </div>
        </div>
    )
}
