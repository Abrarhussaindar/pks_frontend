import "./productImage.css"

export default function ProductImage() {
    return (
        <>
            <div className="otherImageContainer">
                <img src="/assets/images/products/shirt.jpg" className="active" alt="" />
                <img src="/assets/images/products/shirt.jpg" alt="" />
                <img src="/assets/images/products/shirt.jpg" alt="" />
                <img src="/assets/images/products/shirt.jpg" alt="" />
            </div>
            <div className="productImageContainer">
                <img src="/assets/images/products/shirt2.jpg" alt="" />
            </div>
        </>
    )
}
