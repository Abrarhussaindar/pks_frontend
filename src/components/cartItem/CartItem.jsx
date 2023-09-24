import { Link } from "react-router-dom"
import "./cartItem.css"
import { useEffect, useState } from "react"
import axios from "../../api/axios"

export default function CartItem({ cartId, quantity, item }) {
    console.log("cartid: ", cartId)
    const [product, setProduct] = useState([])
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController();
        const getProduct = async () => {
            try {

                const res = await axios.get(`/products/${item.productId}`, {
                    signal: controller.signal
                })
                isMounted && setProduct(res.data)
            } catch (err) {
                console.log(err)
            }
        }
        getProduct();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [cartId, item.productId])
    const buyPath = `/buy/${item.productId}`
    // console.log("new quantiy: ", quant)
    
    const increaseQuantity = () => {
        setQuantity(quant + 1)
        window.location.reload();
        
    }
    const decreaseQuantity = () => {
        
        setQuantity(quant - 1)
        window.location.reload();
    }
    const removeItem = () => {
        
        console.log("item removed")
    }
    const [quant, setQuantity] = useState(quantity)
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController();
        let data = {
            "products": [
                {
                    "productId": item.productId,
                    "quantity": quant,
                }
            ]
        }
        // console.log("data: ", data)
        const updateCart = async () => {
            try {
                const res = await axios.put(`/cart/${cartId}`, data, {
                    signal: controller.signal
                })
                isMounted &&
                console.log(res.data)

            } catch (err) {
                console.log(err)
            }
        };
        updateCart();
        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [cartId, quant, item.productId])
    console.log("quantity: ", quant)
    const deleteCart = async () => {
        const res = await axios.delete(`/cart/${cartId}`)
        console.log("response: ", res.data)
    }
    if(quant === 0){
        deleteCart();
    }
    // const [removeCart, setRemoveCart] = useState(quant)
    // useEffect(()=>{
    //     let isMounted = true
    //     const controller = new AbortController();
    //     const deleteCar = async () => {
    //         try{
    //             const res = await axios.delete(`/cart/${cartId}`)
    //             isMounted && setRemoveCart(res.data)
    //         }catch(err){
    //             console.log(err)
    //         }
    //     };
    //     deleteCar();
    //     return () => {
    //         isMounted = false;
    //         controller.abort();
    //     }
    // },[quant,cartId])
    return (
        <>

            <div className="indiProductContainer">
                <div className="cartLeft">
                    <div className="cartImgContainer">
                        <img src={product.image ? product.image : "/assets/images/me.jpg"} alt="" />
                    </div>

                    <div className="cartProductDetailContainer">
                        <p className="productName">{product ? product.title : ""}</p>
                        <h4 className="productPrice">$ {product ? product.price : ""}</h4>
                        <div className="quantity">

                            <h5>Quatity: <span>{quant < 0 ? 0 : quant}</span></h5>
                            <span className="upDown">
                                <img src="assets/images/up.png" onClick={increaseQuantity} alt="" />
                                <img src="assets/images/down.png" onClick={decreaseQuantity} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="cartRight">
                    <Link className="buyBtn" to={buyPath}>
                        Buy
                    </Link>
                    {/* <button className="buyBtn">Buy</button> */}
                    {/* <button className="qtnBtn">Quatity: 1</button> */}
                    <button className="delBtn" onClick={removeItem}>Delete</button>
                    <button className="saveBtn">Save for later</button>
                </div>

            </div>
            <hr className="bottomHr" />
        </>
    )
}
