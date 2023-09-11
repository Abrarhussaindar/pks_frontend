import "./categoryFilterOptionLeftSideBar.css"

export default function CategoryFilterOptionLeftSideBar() {
    return (
        <div className="leftSideBarContainer">
            <div className="size">
                <div className="heading">
                    <h4>Size</h4>
                    <div className="sizeContent">
                        <button>XS</button>
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>2XL</button>
                        <button>3XL</button>
                    </div>
                </div>
            </div>
            <div className="colour">
                <div className="heading">
                    <h4>colour</h4>
                </div>
            </div>
            <div className="pattern">
                <div className="heading">
                    <h4>pattern</h4>
                </div>
            </div>
            <div className="material">
                <div className="heading">
                    <h4>material</h4>
                </div>
            </div>
            <div className="brands">
                <div className="heading">
                    <h4>brands</h4>
                </div>
            </div>
            <div className="price">
                <div className="heading">
                    <h4>price</h4>
                </div>
            </div>
            <div className="customerRatings">
                <div className="heading">
                    <h4>Customer Ratings</h4>
                </div>
            </div>
            <div className="discount">
                <div className="heading">
                    <h4>discount</h4>
                </div>
            </div>
        </div>
    )
}