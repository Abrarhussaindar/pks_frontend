import "./profile.css"
import Navbar from "../../../components/navbar/Navbar"
import Footer from "../../../components/footer/Footer"
import UserAddress from "../../../components/profilePageComponents/userAddress/UserAddress"

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
                                <UserAddress />
                                <UserAddress />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        
        </>
    )
}
