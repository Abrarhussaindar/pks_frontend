import "./userAddress.css"

export default function UserAddress() {
    return (
        <>
            <div className="indiAddress">
                <div className="addressContent">
                    <div className="addressType">
                        <h4 className="addType">Address Type: 
                        
                            <span > Home</span>
                        </h4>
                    </div>

                    <div className="address">

                        <h4> Address: 


                            <span >Ali Park Zadibal</span>
                        </h4>
                    </div>
                    <div className="city">

                        <h4 className="address"> City: 
                        <span className="userAddress">Srinagar</span>
                        </h4>
                    </div>
                    <div className="state">

                        <h4 className="address"> State: 
                        <span className="userAddress">Jammu & Kashmir</span>
                        </h4>
                    </div>
                    
                    <div className="pin">

                        <h4 className="address"> Pindcode: 
                        <span className="userAddress">190011</span>
                        </h4>
                    </div>
                    
                </div>
                <div className="indiBtns">
                    <button className="addressUpdateBtn">Update</button>
                    <button className="addressDelBtn">Delete</button>
                </div>

            </div>
            <hr className="indiHr"/> 
        </>
    )
}
