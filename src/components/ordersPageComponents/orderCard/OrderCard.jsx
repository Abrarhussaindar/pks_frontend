import "./orderCard.css"

export default function OrderCard() {
    return (
        <div className="indiOrderCard">
            <div className="cardTop">
                <div className="cardTopLeft">
                        <img className="orderImg" src="/assets/images/me.jpg" width="50px" alt="" />
                        <h4>Redragon Kumara K552-RGB LED Backlit USB Mechanical Gaming Keyboard Without Numlock Keys </h4>
                </div>
                <div className="cardTopRight">
                    
                    <span className="orderDetailsSpan">Order Status : <span>Delivered </span></span>
                    <span className="orderDetailsSpan">Order Total : <span className="orderPriceSpan"><span>&#x20B9;</span> 400 </span></span>
                    <span className="orderDetailsSpan">Order Date : <span>12/12/2021</span></span>
                    <span className="orderDetailsSpan">Order ID : <span>123456789</span></span>
                </div>
            </div>
            <div className="cardBottom">
                <button>Track Package</button>
                <button>View Order Details</button>
                <button className="cancelOrder">Cancel</button>
                <button>Return</button>
                <button>Need Help</button>
            </div>
        </div>
    )
}
