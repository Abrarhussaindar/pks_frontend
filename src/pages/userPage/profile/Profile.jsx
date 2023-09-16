import "./profile.css"
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"

export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="profileContainer">
                <div className="profileWrapper">
                    <div className="profileTop">
                        <div className="profileImage">
                            <img className="profileUserImg" src="/assets/images/me.jpg" width="50px" alt="" />
                        </div>
                        <div className="updateBtn">

                            <img src="/assets/images/pen.png" alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className="profileBottom">
                        <div className="profileBottomLeft">
                            <div className="heading">
                                <h3>User Profile Info.</h3>
                                <button>Update Profile</button>
                            </div>
                            <hr className="headingHr"/>
                            <div className="profileBottomInfoContainer">

                            </div>
                        </div>
                        <div className="profileBottomRight">
                            <div className="heading">
                                <h3>User Address Info.</h3>

                                <div className="addressBtns">
                                    <button className="addNew">Add New</button>


                                </div>
                            </div>
                            <hr className="headingHr"/>
                            <div className="profileBottomAddressContainer">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        
        </>
    )
}
