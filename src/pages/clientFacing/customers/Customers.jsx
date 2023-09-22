import CustomersTable from "../../../components/dashboardComponents/dashboardProductComponents/customersTable/CustomersTable"
import "./customers.css"

export default function Customers() {



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
              <CustomersTable />
            </div>
          </div>
    </div>
  )
}
