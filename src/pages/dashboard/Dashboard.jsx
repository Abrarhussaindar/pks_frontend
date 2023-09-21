import "./dashboard.css"
import DashboardNavbar from "../../components/dashboardComponents/dashboardNavbar/DashboardNavbar"
import DashboardLeftSideBar from "../../components/dashboardComponents/dashboardLeftSideBar/DashboardLeftSideBar"

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="leftContainer">
                <DashboardLeftSideBar />

            </div>
            <div className="rightContainer">
                <DashboardNavbar />
                <hr />
                <div className="dashboardMainContent">Dashboard</div>
            </div>
        </div>
    )
}
