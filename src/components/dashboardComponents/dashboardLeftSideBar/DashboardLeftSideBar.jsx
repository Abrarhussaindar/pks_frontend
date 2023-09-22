import { Link } from "react-router-dom"
import "./dLeftSideBar.css"

export default function dashboardLeftSideBar() {
    // const handelActive = (e) => {
    //     e.preventDefault();

    //     console.log(e.target.parentNode.parentNode)
    //     e.target.parentNode.parentNode.classList.add("activeLi")
    //     console.log("you clicked this")
    // }
    return (
        <div className="leftContainer">
            <div className="dLeftSideBarContainer">
                <div className="dLSTop">
                    <Link to="/" className="logoLink">
                        <h1>Panun<span>Keshur</span> Store</h1>
                    </Link>

                    <Link to="/dashboard" className="activedl">
                        <div className="dashboardLeft ">
                            <img className="homeImg" src="/assets/images/home.png" alt="" />
                            <span >Dashboard</span>
                            <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                        </div>
                    </Link>
                </div>
                <div className="dLSBottom">
                    <div className="topBottom">
                        <div className="clientsContainer">
                            <h3>Client Facing</h3>
                            <ul>
                                <li >
                                    <Link to="/cforders">
                                        <img className="orderImg" src="/assets/images/dashboard/orders-blue.png" alt="" />
                                        <span >Orders</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li >
                                    <Link to="/cfproducts">
                                        <img className="cartImg" src="/assets/images/dashboard/product-blue.png" alt="" />
                                        <span >Products</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/customers">
                                        <img className="customerImg" src="/assets/images/dashboard/customer-blue.png" alt="" />
                                        <span >Customers</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/transactions">
                                        <img className="billImg" src="/assets/images/dashboard/bill-blue.png" alt="" />
                                        <span >Transactions</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
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
                                    <Link to="/sales-overview">
                                        <img className="saleshomeImg" src="/assets/images/dashboard/sales-blue.png" alt="" />
                                        <span >Overview</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/daily-sales">
                                        <img className="dailyImg" src="/assets/images/dashboard/daily-blue.png" alt="" />
                                        <span >Daily</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/monthly-sales">
                                        <img className="calendarImg" src="/assets/images/dashboard/calendar-blue.png" alt="" />
                                        <span >Monthly</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sales-breakdown">
                                        <img className="chartImg" src="/assets/images/dashboard/chart-blue.png" alt="" />
                                        <span >Breakdown</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="managementContainer">
                            <h3>Manager</h3>
                        <ul>
                                <li>
                                    <Link to="/admin-page">
                                        <img className="admin-panelImg" src="/assets/images/dashboard/admin-panel-blue.png" alt="" />
                                        <span >Admin</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/performance">
                                        <img className="performanceImg" src="/assets/images/dashboard/performance-blue.png" alt="" />
                                        <span >Performance</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
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
        </div>
    )
}
