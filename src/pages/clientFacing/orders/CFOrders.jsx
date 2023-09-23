import { useEffect, useState } from "react";
import "./cforders.css"
import axios from "../../../api/axios";
import OrderTable from "../../../components/dashboardComponents/dashboardProductComponents/orderTable/OrderTable";


export default function CFOrders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController();

        const getOrders = async () => {
            try {
                const res = await axios.get("/orders",{
                    signal: controller.signal
                });
                isMounted && setOrders(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getOrders();

        return () =>{
            isMounted = false;
            controller.abort();
        }
    }, [])

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
                <table cellPadding="0" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Order Id</th>
                            <th>Product Id</th>
                            <th>Order Amount</th>
                            <th>Payment Mode</th>
                            <th>Order Address</th>
                            <th>Order Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order)=>(
                                <OrderTable key={order._id} order={order} />
                            ))
                        }
                    </tbody>
                </table>
                    
                    
                </div>
            </div>
        </div>
    )
}
