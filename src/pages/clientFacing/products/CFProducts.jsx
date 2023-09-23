import { useState } from "react"
import ProductBox from "../../../components/dashboardComponents/dashboardProductComponents/productBox/ProductBox"
import "./CFProducts.css"
import { useEffect } from "react"
import axios from "../../../api/axios"


export default function CFProducts() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    let isMounted = true
    const controller = new AbortController();
    
    const getProducts = async ()=>{
      try{
        const res = await axios.get("/products",{
          signal: controller.signal
      });
        isMounted && setProducts(res.data)
      }catch(err){
        console.log(err)
      }
    };
    getProducts();
    return ()=>{
      isMounted = false;
      controller.abort();
  }
  },[])
  
  return (
    <div className="dashboardProductsContainer">
      <div className="heading">
          <div className="title">
              <h3>Products</h3>
              <span>See the list of Products</span>
          </div>
          <button className="addBtn">Add New</button>
      </div>
      <div className="dashboardProductsContent">
        <div className="dashboardProductsWrapper">
          {
            products.map((product)=>(
              <ProductBox key={product._id} products={product}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
