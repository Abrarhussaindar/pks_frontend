import { Link } from "react-router-dom"
import CartItem from "../../components/cartItem/CartItem"
import CartSubTotal from "../../components/cartSubTotal/CartSubTotal"
import "./cart.css"
import { useEffect, useState } from "react"
import axios from "../../api/axios"

export default function Cart() {

    const [cart, setCart] = useState([]);
    const userId = "650db1f17d52aa044bfb1abe"
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getcart = async () =>{
            try{
                const res = await axios.get(`/cart/${userId}`,{
                    signal: controller.signal
                })
                isMounted && setCart(res.data)
            }catch(err){
                console.log(err)
            }   
        };
        getcart();
        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[userId])
    console.log("mycart: ",cart)
    return (
        <div className="cartContainer">
            <div className="cartTotalContainer">
                <div className="total">

                    <div className="heading">

                        <h4>Subtotal</h4>
                    </div>
                    <hr />
                    {
                        cart ?
                        cart.products ?
                        cart.products.map((product)=>(
                            <CartSubTotal quantity={product.quantity} productId={product.productId}/>
                        )) : "this is happeing" :"no items found"
                    }
                </div>
                
                <div className="btn">
                    <Link className="checkOut" to="/buy/checkout">
                        Proceed to Checkout
                    </Link> 
                </div>
            </div>
            <div className="cartProductContainer">
                <div className="heading">
                    <h3>Cart Items</h3>
                    
                </div>
                <hr className="cartHr"/>
                <div className="container">
                    {
                        cart ?
                        cart.products 
                        ? cart.products.map((item)=>(
                            <CartItem cartId={cart._id} key={item} quantity={item.quantity} item={item} />
                        )) 
                        : "" : "no items found"
                    }
                    
                </div>
            </div>
        </div>
    )
}
