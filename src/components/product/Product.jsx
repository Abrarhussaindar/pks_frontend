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
                            <table>
                                <thead>
                                    <tr>
                                        <th>Brand</th>
                                        <th>Color</th>
                                        <th>Fit Type</th>
                                        <th>Style</th>
                                        <th>Neck Style</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Dennis Lingo</td>
                                        <td>Dusty Green</td>
                                        <td>Slim Fit</td>
                                        <td>Shirt</td>
                                        <td>Collared Neck</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr />
                        <div className="productAbout">
                            <div className="heading">
                                <h4>About this item</h4>
                            </div>
                            <div className="description">
                                <ul>
                                    <li>Care Instructions: Machine Wash</li>
                                    <li>100% Premium Cotton, Pre-Washed for extremely soft finish and Rich look</li>
                                    <li>Stylish Slim collar casual Shirt for men</li>
                                    <li>Modern Slim Fit, Size chart - S-38, M-40, L-42, XL-44, XXL-46</li>
                                    <li>Best for casual & smart casual wear</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="brandSection">
                <div className="heading">
                    <img src="assets/images/products/brand.png" alt="" />
                    <span>Dennis Lingo</span>
                </div>
                <div className="container">
                    <div className="left">
                        <ul>
                            <li><span><img src="assets/images/products/tick.png" alt="" /></span>84% positive ratings from 100K+ customers</li>
                            <li><span><img src="assets/images/products/tick.png" alt="" /></span>100K+ recent orders from this brand</li>
                            <li><span><img src="assets/images/products/tick.png" alt="" /></span>8+ years on Amazon</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h4>Highly rated by customers for</h4>
                        <div className="rate">
                            <div className="inner">
                                <img src="assets/images/products/thumb.png" alt="" />
                                <span>looks good</span>
                            </div>
                            <div className="inner">
                                <img src="assets/images/products/thumb.png" alt="" />
                                <span>value for money</span>
                            </div>
                            <div className="inner">
                                <img src="assets/images/products/thumb.png" alt="" />
                                <span>quality material</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <hr className="simiHr" />
            <div className="similarProductsSection">
                <div className="heading">
                    <h4>Similar Products</h4>
                </div>
                <div className="container">

                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
            <hr className="simiHr"/>
            <div className="productDetailsSection">
                <h4>Product details</h4>
                <table>
                    <tbody>

                    
                        <tr>
                            <th>Product Dimensions<span className="tspan">:</span></th>
                            <td>25 x 20 x 4.5 cm; 500 Grams</td>
                        </tr>
                        <tr>
                            <th>Date First Available<span className="tspan">:</span></th>
                            <td>24 October 2018</td>
                        </tr>
                        <tr>
                            <th>Manufacturer<span className="tspan">:</span> </th>
                            <td>Swastik Creation</td>
                        </tr>
                        <tr>
                            <th>ASIN<span className="tspan">:</span> </th>
                            <td>B07H35HWDX</td>
                        </tr>
                        <tr>
                            <th>Item model number<span className="tspan">:</span></th>
                            <td>C301</td>
                        </tr>
                        <tr>
                            <th>Country of Origin<span className="tspan">:</span></th>
                            <td>India</td>
                        </tr>
                        <tr>
                            <th>Department<span className="tspan">:</span> </th>
                            <td>Men</td>
                        </tr>
                        <tr>
                            <th>Manufacturer<span className="tspan">:</span> </th><td>Swastik Creation, Swastik Creation -B-21, Bharat Ind. Estate, Sewree (w) ,Mumbai-15, Email - dennislingoshirts@gmail.com, Phone No. 022-22010742</td>
                        </tr>
                        <tr>
                            <th>Packer<span className="tspan">:</span> </th>
                            <td>Swastik Creation -B-21, Bharat Ind. Estate, Sewree (w) ,Mumbai-15, Email - dennislingoshirts@gmail.com, Phone No. 022-22010742</td>
                        </tr>
                        <tr>
                            <th>Item Weight<span className="tspan">:</span></th>
                            <td>500 g</td>
                        </tr>
                        <tr>
                            <th>Item Dimensions LxWxH<span className="tspan">:</span></th>
                            <td>25 x 20 x 4.5 Centimeters</td>
                        </tr>
                        <tr>
                            <th>Net Quantity<span className="tspan">:</span></th>
                            <td>1 count</td>
                        </tr>
                        <tr>
                            <th>Included Components<span className="tspan">:</span></th>
                            <td>Casual Shirt</td>
                        </tr>
                        <tr>
                            <th>Generic Name<span className="tspan">:</span></th>
                            <td>Casual Shirts</td>
                        </tr>
                        <tr>
                            <th>Best Sellers Rank<span className="tspan">:</span></th>
                            <td>#5 in Clothing & Accessories </td>
                        </tr>
                        <tr>
                            <th>Customer Reviews<span className="tspan">:</span></th>
                            <td>
                            <ul className="productRating">
                                <li>
                                    <span className="numStars">3.8</span>
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/starOutline.png" alt="" />
                                    <span className="numRatings">
                                        - 2,000 Ratings
                                    </span>
                                </li>
                            </ul>
                            </td>
                        </tr>
                        </tbody>
                </table>
            </div>
            <hr className="simiHr"/>
            <div className="productDescriptionSection">
                <h4>Product description</h4>
                <p>This Casual Solid shirt has a Slim fit, Spread collar, full button Placket, Full Sleeves, and a curved hemline Size and Fit Slim Fit The Model (height 6 foot and shoulders 18 inches is wearing size 40/M Please check the size chart for more details before ordering Material & Care 100% Premium Cotton (Machine Wash Regular) Style Tip Enhance your look by wearing this Casual Stylish Men's shirt, Team it with a pair of Chinos or Tapered Denim and Sneakers for a fun Smart Casual look About the Brand DENNIS LINGO Finding Basic Menswear for daily use can be hard among todays Fast fashion world, where trends change daily. That’s why we started Dennis Lingo, to create a one stop shop for premium essential clothing for everyday use at lowest prices</p>
            </div>
            <hr className="simiHr"/>
            <div className="fromManufaturerSection">pending</div>
            <hr className="simiHr"/>
            <div className="productReviewsSection">
                <div className="top">
                    <div className="heading">
                        <h3>Looking for specific info?</h3>
                    </div>
                    <div className="searchContainer">
                        <img src="assets/images/search.png" alt="" />
                        <input type="text" placeholder="Search in reviews, Q&A..." />
                    </div>
                </div>
                <hr />
                <div className="bottom">
                    <div className="left">
                        <div className="customerRevies">
                            <div className="heading">
                                <h4>Customer reviews</h4>
                            </div>
                            stars 3.8 out of 5 <span>(3000 ratings)</span>
                            <div className="ratingProgressBar">
                                <div className="bar"><span>1 Star </span>progrees bar <span> 20% </span></div>
                                <div className="bar"><span>1 Star </span>progrees bar <span> 20% </span></div>
                                <div className="bar"><span>1 Star </span>progrees bar <span> 20% </span></div>
                                <div className="bar"><span>1 Star </span>progrees bar <span> 20% </span></div>
                                <div className="bar"><span>1 Star </span>progrees bar <span> 20% </span></div>
                            </div>
                        </div>
                        <hr />
                        <div className="byFeature">
                            <div className="heading">
                                <h4>By feature</h4>
                            </div>
                            <div className="container">
                                <div className="inner">
                                    <div className="left">
                                        <p>Comfort</p>
                                    </div>
                                    <div className="right">
                                        stars 3.5
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="left">
                                        <p>Value for money</p>
                                    </div>
                                    <div className="right">
                                        stars 3.5
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="left">
                                        <p>Quality of material</p>
                                    </div>
                                    <div className="right">
                                        stars 3.5
                                    </div>
                                </div>
                                <div className="inner">
                                    <div className="left">
                                        <p>Sheerness</p>
                                    </div>
                                    <div className="right">
                                        stars 3.5
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="reviewThisProduct">
                            <div className="heading">
                                <h4>Review this product</h4>
                            </div>
                            <div className="container">
                                <p>Share your thoughts with other customers</p>
                                <button>Write a product review</button>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="top">
                            <div className="heading">
                                <h4>
                                    Reviews with images
                                </h4>
                            </div>
                            <div className="imgContainer">
                                <img src="assets/images/me.jpg" width="20px" alt="" />
                                <img src="assets/images/me.jpg" width="20px" alt="" />
                                <img src="assets/images/me.jpg" width="20px" alt="" />
                                <img src="assets/images/me.jpg" width="20px" alt="" />
                            </div>
                        </div>
                        <hr />
                        <div className="center">
                            <div className="heading">
                                <h4>
                                    Read reviews that mention
                                </h4>
                            </div>
                            <div className="container">
                                <div className="inner">
                                    <p>value for money</p>
                                </div>
                                <div className="inner">
                                    <p>dennis lingo</p>
                                </div>
                                <div className="inner">
                                    <p>price range</p>
                                </div>
                                <div className="inner">
                                    <p>pure cotton</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="bottom">
                            <div className="heading">
                                <h4>
                                    Top reviews from India
                                </h4>
                            </div>
                            <div className="container">
                                <div className="head">
                                    <img src="assets/images/me.jpg "width="20px" alt="" />
                                    <span>Abrar Hussain</span>
                                </div>
                                <div className="rating">
                                    <div className="stars">

                                        4 stars - worth buying
                                    </div>
                                    <div className="ratingDate">
                                        <p>Reviewed in India on 6 September 2023</p>
                                    </div>
                                </div>
                                <div className="productDetails">
                                    <div className="size">
                                        Size: L 
                                    </div>
                                    <div className="color">
                                        Colour: Black 
                                    </div>
                                    <div className="verified">
                                        Verified Purchase
                                    </div>
                                </div>
                                <div className="reviewDescription">
                                    <p>Overall good product but the thickness of the cloth is questionable....It doesn't last longer but yup for this price range Not bad...It will Last For 4-5 months definitely...</p>
                                </div>
                                <div className="btn">
                                    <button>Helpful</button>
                                    <button>Report</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
