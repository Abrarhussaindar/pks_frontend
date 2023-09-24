import { Link, NavLink } from "react-router-dom"
import "./dLeftSideBar.css"

export default function dashboardLeftSideBar() {
    // const handelActive = (e) => {
    //     e.preventDefault();

    //     console.log(e.target.parentNode.parentNode)
    //     e.target.parentNode.parentNode.classList.add("activeLi")
    //     console.log("you clicked this")
    // }
    const closeRightSideBar = () => {
        document.querySelector(".leftContainer").classList.remove("open")
    }
    const navLinks = [
        {
            to: "/dashboard",
            span: "Dashboard",
            whiteImg: "/assets/images/home-white.png",
            blueImg: "/assets/images/home.png"
        },
        {
            to: "/cforders",
            span: "Orders",
            whiteImg: "/assets/images/dashboard/orders-white.png",
            blueImg: "/assets/images/dashboard/orders-blue.png"
        },
        {
            to: "/cfproducts",
            span: "Products",
            whiteImg: "/assets/images/dashboard/product-white.png",
            blueImg: "/assets/images/dashboard/product-blue.png"
        },
        {
            to: "/customers",
            span: "Customers",
            whiteImg: "/assets/images/dashboard/customer-white.png",
            blueImg: "/assets/images/dashboard/customer-blue.png"
        },
        {
            to: "/transactions",
            span: "Transactions",
            whiteImg: "/assets/images/dashboard/bill-white.png",
            blueImg: "/assets/images/dashboard/bill-blue.png"
        },
        {
            to: "/geography",
            span: "Geography",
            whiteImg: "/assets/images/dashboard/globe-white.png",
            blueImg: "/assets/images/dashboard/globe-blue.png"
        },
        {
            to: "/sales-overview",
            span: "Overview",
            whiteImg: "/assets/images/dashboard/sales-white.png",
            blueImg: "/assets/images/dashboard/sales-blue.png"
        },
        {
            to: "/daily-sales",
            span: "Daily",
            whiteImg: "/assets/images/dashboard/daily-white.png",
            blueImg: "/assets/images/dashboard/daily-blue.png"
        },
        {
            to: "/monthly-sales",
            span: "Monthly",
            whiteImg: "/assets/images/dashboard/calendar-white.png",
            blueImg: "/assets/images/dashboard/calendar-blue.png"
        },
        {
            to: "/sales-breakdown",
            span: "Breakdown",
            whiteImg: "/assets/images/dashboard/chart-white.png",
            blueImg: "/assets/images/dashboard/chart-blue.png"
        },
        {
            to: "/admin-page",
            span: "Admin Panel",
            whiteImg: "/assets/images/dashboard/admin-panel-white.png",
            blueImg: "/assets/images/dashboard/admin-panel-blue.png"
        },
        {
            to: "/performance",
            span: "Performance",
            whiteImg: "/assets/images/dashboard/performance-white.png",
            blueImg: "/assets/images/dashboard/performance-blue.png"
        }
    ]
    navLinks.map((ele) => (
        console.log(ele.span),
        console.log(ele.whiteImg),
        console.log(ele.blueImg)
    ))

    return (

        <div className="dLeftSideBarContainer">
            <div className="dLSTop">
                <div className="dashboardRight">
                    <Link to="/" className="logoLink">
                        <h1>Panun<span>Keshur</span> Store</h1>
                    </Link>
                    <img src="/assets/images/close.png" className="close" onClick={closeRightSideBar} alt="" />
                </div>
                

            </div>
            <div className="dLSBottom">
                <div className="topBottom">
                {
                    navLinks.map((link) => (
                        <ul>
                            <NavLink to={link.to} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            } style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? 'var(--hover-color)' : 'var(--un-color)',
                                fontWeight: isActive ? "600" : "400"
                            })}>
                                    <li>
                                        <img className="homeImg" src={link.whiteImg} alt="" />
                                        <span >{link.span}</span>
                                        <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />
                                    </li>
                            </NavLink>
                        </ul>
                    ))
                }



                    {/* <div className="clientsContainer"> */}
                        {/* <h3>Client Facing</h3> */}

                        {/* <ul>
                            <NavLink to="/cforders" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li >

                                    <img className="orderImg" src="/assets/images/dashboard/orders-blue.png" alt="" />
                                    <span >Orders</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/cfproducts" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li >

                                    <img className="cartImg" src="/assets/images/dashboard/product-blue.png" alt="" />
                                    <span >Products</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/customers" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="customerImg" src="/assets/images/dashboard/customer-blue.png" alt="" />
                                    <span >Customers</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/transactions" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="billImg" src="/assets/images/dashboard/bill-blue.png" alt="" />
                                    <span >Transactions</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/geography" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="globeImg" src="/assets/images/dashboard/globe-blue.png" alt="" />
                                    <span >Geography</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="salesContainer">
                        <h3>Sales</h3>
                        <ul>
                            <NavLink to="/sales-overview" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="saleshomeImg" src="/assets/images/dashboard/sales-blue.png" alt="" />
                                    <span >Overview</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/daily-sales" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="dailyImg" src="/assets/images/dashboard/daily-blue.png" alt="" />
                                    <span >Daily</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/monthly-sales" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="calendarImg" src="/assets/images/dashboard/calendar-blue.png" alt="" />
                                    <span >Monthly</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/sales-breakdown" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="chartImg" src="/assets/images/dashboard/chart-blue.png" alt="" />
                                    <span >Breakdown</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                        </ul>
                    </div>
                    <div className="managementContainer">
                        <h3>Manager</h3>
                        <ul>
                            <NavLink to="/admin-page" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="admin-panelImg" src="/assets/images/dashboard/admin-panel-blue.png" alt="" />
                                    <span >Admin</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                            <NavLink to="/performance" style={({ isActive }) => ({
                                color: isActive ? 'white' : 'var(--main-color)',
                                backgroundColor: isActive ? "var(--hover-color)" : "none"
                            })}>
                                <li>

                                    <img className="performanceImg" src="/assets/images/dashboard/performance-blue.png" alt="" />
                                    <span >Performance</span>
                                    <img className="rightImg" src="/assets/images/dashboard/next.png" alt="" />

                                </li>
                            </NavLink>
                        </ul>
                    </div> */}


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
