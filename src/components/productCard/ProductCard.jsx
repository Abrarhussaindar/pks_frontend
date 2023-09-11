import "./productCard.css"

export default function ProductCard() {
    return (
        <div className="productCard">
            <div className="productImgContainer">
                <img src="/assets/images/products/shirt.jpg" alt="" />
                <ul className="shirtColors">
                    <li className="red active"></li>
                    <li className="blue"></li>
                    <li className="green"></li>
                    <li className="yellow"></li>
                    <li className="white"></li>
                </ul>
            </div>
            <div className="productDetailsContainer">
                <h4>product name</h4>
                <p>Men's Solid Slim Fit Cotton Casual Shirt with Spread Collar & Full Sleeve</p>
            
                <ul className="productRating">
                    <li>
                        <img src="/assets/images/star.svg" alt="" />
                        <img src="/assets/images/star.svg" alt="" />
                        <img src="/assets/images/star.svg" alt="" />
                        <img src="/assets/images/star.svg" alt="" />
                        <img src="/assets/images/starOutline.png" alt="" />
                        <span>

                            - 2000
                        </span>
                    </li>
                </ul>
                <div className="productPrice">
                    <div className="prices">
                        <span>&#x20B9;</span>
                        462
                    </div>
                    <p>M.R.P: <span>&#x20B9;1000</span> </p>
                    <div className="discounts">(75% off)</div>
                </div>
                <div className="deliveryOptions">
                    <p>FREE Delivery over &#x20B9;499</p>
                </div>
            </div>
        </div>
    )
}
