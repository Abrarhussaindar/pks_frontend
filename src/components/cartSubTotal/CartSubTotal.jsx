import { useEffect, useState } from "react"
import "./cartSubTotal.css"
import axios from "../../api/axios"

export default function CartSubTotal({quantity, productId}) {
    const [product, setProduct] = useState([])
    // console.log("got produc id: ", productId)
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getProduct = async () => {
            try{
                const res = await axios.get(`/products/${productId}`, {
                    signal: controller.signal
                })
                // console.log("getting product")
                isMounted && setProduct(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getProduct();
        return () =>{
            isMounted = false;
            controller.abort();
        }
    },[productId])
    let fetchedPrice = product.price
    // console.log("product: ", product)
    const [price, setPrice] = useState(fetchedPrice)
    useEffect(()=>{
        setPrice(product.price)
    },[product])
    const totalPrice = quantity * price
    return (
        <div className="proDet">
            <h5 >Items: <span className="itemSpan">{quantity}</span></h5>
            <h5>Total: <span className="priceSpan">{totalPrice}</span></h5>
        </div>
    )
    
}
