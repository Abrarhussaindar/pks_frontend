import CartItem from "../../components/cartItem/CartItem"
import CartSubTotal from "../../components/cartSubTotal/CartSubTotal"
import "./cart.css"

export default function Cart() {
    return (
        <div className="cartContainer">
            <div className="cartTotalContainer">
                <div className="total">

                    <div className="heading">

                        <h4>Subtotal</h4>
                    </div>
                    <hr />
                    <CartSubTotal />
                </div>
                
                <div className="btn">

                    <button>Proceed to Checkout</button>  
                </div>
            </div>
            <div className="cartProductContainer">
                <div className="heading">
                    <h3>Cart Items</h3>
                    
                </div>
                <hr className="cartHr"/>
                <div className="container">
                    <CartItem />
                </div>
            </div>
        </div>
    )
}
