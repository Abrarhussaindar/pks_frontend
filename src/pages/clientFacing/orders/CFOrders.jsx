import { useEffect, useState } from "react";
import "./cforders.css"
import axios from "axios";

export default function CFOrders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/orders");
                setOrders(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getOrders();
    }, [orders])
    // console.log("orders: ", orders)
    return (
        <div className="dashboardOrdersContainer">
            <div className="heading">
                <div className="title">
                    <h3>Orders</h3>
                    <span>See the list of Orders</span>
                </div>
                <button className="addBtn">Add New</button>
            </div>
            <div className="dashboardOrdersContent">
                <div className="dashboardOrdersWrapper">
                </div>
            </div>
        </div>
    )
}
