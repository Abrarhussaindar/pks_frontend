import { Link } from "react-router-dom"
import "./dLeftSideBar.css"

export default function dashboardLeftSideBar() {
    return (
        <div className="dLeftSideBarContainer">
            <div className="dLSTop">
                <Link to="/" className="logoLink">
                    <h1>Panun<span>Keshur</span> Store</h1>
                </Link>

                <div className="dashboard">
                    <img src="/assets/images/home.png" alt="" />
                    <span>Dashboard</span>
                </div>
            </div>
            <div className="dLSBottom">
                <div className="topBottom">
                    <div className="clientsContainer">
                        <h3>Client Facing</h3>
                        <ul>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Customers</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Transactions</span>
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
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Overview</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Daily</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Monthly</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Breakdown</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="managementContainer">
                        <h3>Manager</h3>
                    <ul>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Admin</span>
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src="/assets/images/home.png" alt="" />
                                    <span>Performance</span>
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
                    <img className="downArrow" src="/assets/images/down.png" alt="" />
                </div>
            </div>
        </div>
    )
}
