import ProductColor from "../categoryFilters/productColor/ProductColor"
import ProductSize from "../categoryFilters/productSize/ProductSize"
import ProductCard from "../productCard/ProductCard"
import "./product.css"

export default function Product() {
    return (
        <div className="productContainer">
            <div className="mainSection">
                <div className="left">
                    <div className="otherImageContainer">
                        <img src="/assets/images/products/shirt.jpg" className="active" alt="" />
                        <img src="/assets/images/products/shirt.jpg" alt="" />
                        <img src="/assets/images/products/shirt.jpg" alt="" />
                        <img src="/assets/images/products/shirt.jpg" alt="" />
                    </div>
                    <div className="productImageContainer">
                        <img src="/assets/images/products/shirt2.jpg" alt="" />
                    </div>
                </div>
                <div className="right">
                    <div className="productDetialContainer">
                        Dennis Lingo Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeves (Also Available in Plus Size)
                    </div>
                    
                    <ul className="productRating">
                        <li>
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/starOutline.png" alt="" />
                            <span>

                                - 2000 Ratings
                            </span>
                        </li>
                    </ul>
                    <hr />
                    <div className="priceContainer">
                        <div className="discounts">-75% off</div>
                        <div className="prices">
                            <span>&#x20B9;</span>
                            462
                        </div>
                        <p>M.R.P: <span>&#x20B9;1000</span> </p>
                    </div>
                    
                    <div className="stockContainer">
                        <h4>In Stock</h4>
                        <p>Quantity: <span className="quantityCount">1</span></p> 
                        <p>Sold by <span>seller name</span>  and <span>Fulfilled by PKS.</span> </p>
                    </div>
                    <div className="pincodeContainer">
                        <img src="assets/images/pin.png" alt="" />
                        <p>Deliver to <span>name</span> - <span>address</span></p>
                    </div>
                    
                    <div className="btnsContainer">
                        <button className="addToCart">Add to Cart</button>
                        <button className="buyNow">Buy Now</button>
                    </div>
                    <hr />
                    <div className="offerContainer">
                        <div className="heading">
                            <h4>Offers</h4>
                        </div>
                        <div className="container">

                            <div className="innerContainer">
                                <h5>Partner Offers</h5>
                                <p> Get GST invoice and save up to 28% on business purchases. </p>
                            </div>
                            <div className="innerContainer">
                                <h5>Partner Offers</h5>
                                <p> Get GST invoice and save up to 28% on business purchases.</p>
                            </div>
                            <div className="innerContainer">
                                <h5>Partner Offers</h5>
                                <p> Get GST invoice and save up to 28% on business purchases. </p>
                            </div>
                            <div className="innerContainer">
                                <h5>Partner Offers</h5>
                                <p> Get GST invoice and save up to 28% on business purchases.</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="serviceContainer">
                        <ul>
                            <li><img src="assets/images/me.jpg" alt="" /><span>Free Deliver</span></li>
                            <li><img src="assets/images/me.jpg" alt="" /><span>Pay On Deliver</span></li>
                            <li><img src="assets/images/me.jpg" alt="" /><span>10 Days Return</span></li>
                            <li><img src="assets/images/me.jpg" alt="" /><span>Top Brands</span></li>
                            <li><img src="assets/images/me.jpg" alt="" /><span>Secure Transaction</span></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="aboutItemContainer">
                        <div className="productColor">
                            <ProductColor />
                        </div>
                        <hr />
                        <div className="productSize">
                            <ProductSize />
                        </div>
                        <hr />
                        <div className="productTable">
                            {/* <table>
                                <tr>
                                    <th>Brand</th>
                                    <th>Color</th>
                                    <th>Fit Type</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </table> */}
                        </div>
                        <div className="productAbout">
                            <div className="heading">
                                <h4>About this item</h4>
                            </div>
                            <div className="description"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brandSection">
                <div className="left"></div>
                <div className="right"></div>
            </div>

            <div className="similarProductsSection">
                <div className="heading">
                    <h4>Similar Products</h4>
                </div>
                <div className="container">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>

            <div className="productDetailsSection"></div>
            <div className="productDescriptionSection"></div>
            <div className="fromManufaturerSection"></div>
            <div className="productReviewsSection"></div>
        </div>
    )
}
