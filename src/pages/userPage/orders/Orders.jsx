import OrderCard from "../../../components/ordersPageComponents/orderCard/OrderCard"
import "./orders.css"

export default function Orders() {

    const openLeftSideBarFilterOptions = () => {
        console.log("open left side bar filter options")
    }

    return (
        
        <div className="orderContainer">
            <div className="orderWrapper">
                <div className="heading">
                    <h1>Orders</h1>
                    <div className="orderSearchBar">
                        <input type="text" placeholder="Search Orders here..." />
                        <button>Search</button>
                    </div>
                </div>
                <hr />
                <div className="ordersContent">
                    <div className="leftSiderToggleBtn">
                        <img src="/assets/images/filter.png" onClick={openLeftSideBarFilterOptions} alt="" />
                    </div>
                    <div className="ordersLeftSide">
                        <div className="leftSideHeading">
                            <h3>Filter by :</h3>
                        </div>
                        <hr />
                        <ul>
                            <li className="active">Orderd</li>
                            <li>Not Yet Dispatched</li>
                            <li>Cancelled Orders</li>
                            <li>Returned</li>
                            <li>Buy Again</li>
                        </ul>
                    </div>
                    <div className="ordersRightSide">
                        <OrderCard />
                        <hr className="orderHr"/>
                        <OrderCard />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
