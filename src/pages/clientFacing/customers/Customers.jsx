import { useState } from "react";
import CustomersTable from "../../../components/dashboardComponents/dashboardProductComponents/customersTable/CustomersTable"
import "./customers.css"
import { useEffect } from "react";
import axios from "../../../api/axios";

export default function Customers() {
  const [customers, setCustomers] = useState([]);


  useEffect(() => {
      let isMounted = true
      const controller = new AbortController();

      const getCustomers = async () => {
          try {
              const res = await axios.get("/user/all",{
                  signal: controller.signal
              });
              isMounted && setCustomers(res.data)
          } catch (err) {
              console.log(err)
          }
      };
      getCustomers();
      return ()=>{
          isMounted = false;
          controller.abort();
      }
  }, [])


// console.log("address: ", userAddress)

  return (
    <div className="customerContent">
          <div className="heading">
              <div className="title">
                  <h3>Customers</h3>
                  <span>List of Customers</span>
              </div>
              <button className="addBtn">Add New</button>
          </div>
          <div className="cusContent">
            <div className="cusWrapper">
            <table cellPadding="0" cellSpacing="0">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Role</th>
                    <th>Pin Code</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
              {
                  customers.map((customer)=>(
                    <CustomersTable key={customer._id} customer={customer}/>
                  ))
                }
            </tbody>
        </table>
              
            </div>
          </div>
    </div>
  )
}
