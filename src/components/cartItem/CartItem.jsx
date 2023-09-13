import { Link } from "react-router-dom"
import "./cartItem.css"

export default function CartItem() {
    return (
        <>
            <div className="indiProductContainer">
                <div className="cartLeft">
                    <div className="cartImgContainer">
                        <img src="assets/images/me.jpg" alt="" />
                    </div>
                        
                    <div className="cartProductDetailContainer">
                        <p className="productName">Logitech G USB G G203 Wired Gaming Mouse, 8000 DPI, Rainbow Optical Effect LIGHTSYNC RGB, 6 Programmable Buttons, On-Board Memory, Screen Mapping, PC/Mac Computer and Laptop Compatible - Black</p>
                        <h4 className="productPrice">$ 100</h4>
                        <div className="quantity">

                            <h5>Quatity: <span>1</span></h5> 
                            <span className="upDown">
                                <img src="assets/images/up.png" alt="" />
                                <img src="assets/images/down.png" alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cartRight">
                    <Link className="buyBtn" to="/buy/1">
                        Buy
                    </Link> 
                    {/* <button className="buyBtn">Buy</button> */}
                    {/* <button className="qtnBtn">Quatity: 1</button> */}
                    <button className="delBtn">Delete</button>
                    <button className="saveBtn">Save for later</button>
                </div>
                
            </div>
            <hr className="bottomHr"/>
        </>
    )
}
