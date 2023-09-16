import { Link } from "react-router-dom"
import "./rightSideBar.css"

export default function RightSideBar() {

    const closeRightSideBar = () => {
        document.querySelector(".rightSideBar").classList.remove("open")
    }

    return (
        <div className="rightSideBar">
            <div className="rightSideBarHeading" >
                <img src="/assets/images/close.png" className="close" onClick={closeRightSideBar} alt="" />
                <img src="/assets/images/me.jpg" className="userPic" alt="" />
            </div>
            <hr className="rsHr"/>
            <div className="Container">
                <div className="linksContainer">
                    <ul>

                        <Link to="/profile/1">
                            <li><img className="icon userProfileIcon" src="/assets/images/user-outline.png" alt="" /><span>Profile</span></li>
                        </Link>
                        <Link to="/orders/1">
                            <li><img className="icon userOrdersIcon" src="/assets/images/orders-outline.png" alt="" /><span>Orders</span></li>
                        </Link>

                        <Link to="/wishlist/1">
                            <li><img className="icon userWishlistIcon" src="/assets/images/love-outline.png" alt="" /><span>Wishlist</span></li>
                        </Link>

                        <Link to="/help">
                            <li><img className="icon userHelpIcon" src="/assets/images/help-outline.png" alt="" /><span>Help</span></li>
                        </Link>

                        <Link to="/customer-service">
                            <li><img className="icon customerServicesIcon" src="/assets/images/support-outline.png" alt="" /><span>Customer Services</span></li>
                        </Link>

                    </ul>
                </div>
                <div className="btnsContainer">
                    <button className="logoutBtn">Logout</button>
                </div>
            </div>
        </div>
    )
}
