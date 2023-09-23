import { useEffect, useState } from "react"
import DashboardBox from "../../components/dashboardComponents/dashboardBox/DashboardBox"
import "./dashboard.css"
import axios from "../../api/axios";

export default function Dashboard() {
    const [orders, setOrders] = useState([]);
    const [customers, setCustomers] = useState([]);
    // const [dailySales, setDailySales] = useState([]);
    // const [montlySales, setMonthlySales] = useState([]);
    
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getOrders = async () =>{
            try{
                const res = await axios.get("/orders",{
                    signal: controller.signal
                })
                isMounted && setOrders(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getOrders();
        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[])

    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getCustomers = async () =>{
            try{
                const res = await axios.get("/user/all",{
                    signal: controller.signal
                })
                isMounted && setCustomers(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getCustomers();
        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[])
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
                            <DashboardBox title={"Total Orders"} imageUrl={"/assets/images/me.jpg"} mainContent={orders.length} percent={"+5%"} />
                            <DashboardBox title={"Total Customers"} imageUrl={"/assets/images/me.jpg"} mainContent={customers.length} percent={"+5%"} />
                            <DashboardBox title={"Daily Sales"} imageUrl={"/assets/images/me.jpg"} mainContent={"400"} percent={"+5%"} />
                            <DashboardBox title={"Monthly Sales"} imageUrl={"/assets/images/me.jpg"} mainContent={"500"} percent={"+5%"} />
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
