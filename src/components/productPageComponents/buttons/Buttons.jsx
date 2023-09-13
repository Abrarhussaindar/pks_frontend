import { Link } from "react-router-dom"
import "./buttons.css"

export default function Buttons() {
    return (
        <div className="btnsContainer">
            <button className="addToCart">Add to Cart</button>
            
            <Link className="buyNow" to="/buy/1">
                Buy Now
            </Link>
        </div>
    )
}
