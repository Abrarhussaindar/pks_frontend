import "./productPrice.css"

export default function ProductPrice() {
    return (
        <div className="price">
            <div className="heading">
                <h4>Price</h4>
            </div>
            <div className="brandContent">
                <ul>
                    <li>Under &#x20B9;300</li>
                    <li>&#x20B9;300 - &#x20B9;500</li>
                    <li>&#x20B9;500 - &#x20B9;1,000</li>
                    <li>&#x20B9;1,000 - &#x20B9;1,500</li>
                    <li>Over &#x20B9;1,500</li>
                </ul>
            </div>
        </div>
    )
}
