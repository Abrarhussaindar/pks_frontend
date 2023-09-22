import "./dashboard.css"

export default function Dashboard() {
    return (
        <div className="dashboardContent">
            <div className="dashboardMainContent">
                <div className="heading">
                    <div className="title">
                        <h3>Dashboard</h3>
                        <span>Welcome to Dashboard</span>
                    </div>
                    <button className="downloadBtn">download stats</button>
                </div>
                <div className="dContent">
                    <div className="topdContent">
                        <div className="leftTop">
                            <div className="box">
                                <div className="boxHeading">
                                    <h5>Total Orders</h5>
                                    <img src="/assets/images/me.jpg" width="20px" alt="" />
                                </div>
                                <div className="boxNumber">
                                    <h3>200</h3>
                                </div>
                                <div className="boxTimeStamp">
                                    <h6>+5%</h6>
                                    <p>since last month</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="boxHeading">
                                    <h5>Total Customers</h5>
                                    <img src="/assets/images/me.jpg" width="20px" alt="" />
                                </div>
                                <div className="boxNumber">
                                    <h3>200</h3>
                                </div>
                                <div className="boxTimeStamp">
                                    <h6>+5%</h6>
                                    <p>since last month</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="boxHeading">
                                    <h5>Daily Sales</h5>
                                    <img src="/assets/images/me.jpg" width="20px" alt="" />
                                </div>
                                <div className="boxNumber">
                                    <h3>200</h3>
                                </div>
                                <div className="boxTimeStamp">
                                    <h6>+5%</h6>
                                    <p>since last month</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="boxHeading">
                                    <h5>Monthly Sales</h5>
                                    <img src="/assets/images/me.jpg" width="20px" alt="" />
                                </div>
                                <div className="boxNumber">
                                    <h3>200</h3>
                                </div>
                                <div className="boxTimeStamp">
                                    <h6>+5%</h6>
                                    <p>since last month</p>
                                </div>
                            </div>
                        </div>
                        <div className="rightTop">
                            <div className="boxChart">
                                chart 1
                            </div>
                        </div>
                    </div>
                    <div className="bottomdContent">
                        <div className="leftBottom">
                            <div className="transactionBox">
                                transactions details
                            </div> 
                        </div>
                        <div className="rightBottom">
                            <div className="chartBox">

                                chart 2
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
