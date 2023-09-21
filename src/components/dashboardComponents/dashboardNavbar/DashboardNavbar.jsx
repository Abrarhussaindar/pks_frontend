import "./dNavbar.css"

export default function dashboardNavbar() {
    return (
        <div className="dNavContainer">
            <div className="dNavLeft">
                <div className="dNavSearchBar">
                    <input type="text" placeholder="Search here..." />
                    <img src="/assets/images/Topsearch.png" alt="" />
                </div>
            </div>
            <div className="dNavright">
                <div className="adminDetailsContainer">
                    <img src="/assets/images/me.jpg" alt="" />
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
