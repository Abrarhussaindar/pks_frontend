import "./dNavbar.css"

export default function dashboardNavbar() {
    const openLeftSideBar = () =>{
        document.querySelector(".leftContainer").classList.add("open")
    }
    return (
        <div className="dNavContainer">
            <img className="menuImg" onClick={openLeftSideBar} src="/assets/images/dashboard/menu.png" alt="" />
            <div className="dNavLeft">
                <div className="dNavSearchBar">
                    <input type="text" placeholder="Search here..." />
                    <img src="/assets/images/search-white.png" alt="" />
                </div>
            </div>
            <div className="dNavright">
                <div className="adminDetailsContainer">
                    <img src="/assets/images/me.jpg" alt="" />
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
