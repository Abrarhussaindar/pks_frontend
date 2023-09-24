
import ProductCard from "../productPageComponents/productCard/ProductCard"
import "./categoryContent.css"
import { useEffect, useState } from "react"
import axios from "../../api/axios"

export default function CategoryContent({cate, subCate}) {
    const subcate = subCate[0].subName

    const [products, setProducts] = useState([]);
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        const getProducts = async () =>{
            try{
                const res = await axios.get(`/products?category=${cate.name}`)
                isMounted && setProducts(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getProducts();
        return () => {
            isMounted = false;
            controller.abort();
        }
    },[cate, subCate])

    return (
        <div className="categoryContentContainer">
            {
                products.map((product)=>(
                    <ProductCard key={product._id} subcate={subcate} product={product}/>
                ))
            }
            
        </div>
    )
}
