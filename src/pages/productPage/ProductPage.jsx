import { useLocation } from "react-router-dom"
import BreadCrums from "../../components/breadCrums/BreadCrums"
import Product from "../../components/product/Product"
import "./productPage.css"
import { useEffect, useState } from "react"
import axios from "../../api/axios"



export default function ProductPage() {
    const location = useLocation().pathname
    const productId = location.split("/")[4]
    console.log("pro id; ", productId)
    const [product, setProduct] = useState([])

    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getProduct = async () =>{
            try{
                const res = await axios.get(`/products/${productId}`)
                isMounted && setProduct(res.data)
                console.log("res.data: ", res.data)
            }catch(err){
                console.log(err)
            }
        }
        getProduct();
        return () => {
            isMounted = false;
            controller.abort();
        }
    },[productId])
    console.log("prodcut at product page: ", product)
    return (
        <>
            <div className="productPage">
                <BreadCrums />
                <Product product={product}/>
            </div>
        </>
    )
}
