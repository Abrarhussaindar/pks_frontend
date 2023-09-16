import "./buyPage.css"

export default function BuyPage(props) {
    // console.log("porps", props)

    const productDetails = () => {
        return <h4>product details</h4>
    }
    const cartItemDetails = () => {
        return <h4>cart item details</h4>
    }

    
    return (
        <div className="buyContainer">
            <div className="buyWrapper">
                <div className="buyTop">
                    <div className="topLeft">
                        <div className="heading">
                            <h3>Order Summary</h3>
                        </div>
                        <div className="orderSummary">
                            {props.productId ? productDetails() : cartItemDetails()}
                        </div>
                    </div>
                    <div className="topRight">
                        <div className="heading">
                            <h3>Payment Options</h3>
                        </div>

                        <div className="paymentOptions">
                            payment options
                        </div>
                    </div>
                </div>
                <div className="buyBottom">

                    <div className="addressContainer">
                        <div className="addressForm">
                            <div className="heading">
                                <h3>Choose Address</h3>
                            </div>
                            <form action="POST">
                                <input type="text" className="fName" required placeholder="First Name" />
                                <input type="text" className="lName" required placeholder="Last Name" />
                                <input type="text" required placeholder="Address" />
                                <input type="text" required placeholder="City" />
                                <input type="text" required placeholder="State" />
                                <input type="text" required placeholder="Pincode" />
                                <input type="tel" required placeholder="Phone" />
                            </form>
                            <button type="submit" className="addBtn">Add Address</button>
                        </div>
                        <div className="exsistingAddress">
                            <div className="heading">
                                <h3>Your Address</h3>
                            </div>

                            <div className="userAddress">
                                <ul className="address">
                                    <li><span className="userNameAddress">name - </span>address <span className="addSpanBtn"><button className="useBtn">use this address</button><button className="removeBtn">remove</button></span></li>
                                    <hr />
                                    <li><span className="userNameAddress">name - </span>address <span className="addSpanBtn"><button className="useBtn">use this address</button><button className="removeBtn">remove</button></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
