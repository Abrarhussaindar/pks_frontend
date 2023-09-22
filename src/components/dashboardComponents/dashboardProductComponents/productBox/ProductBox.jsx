import "./productBox.css"

export default function ProductBox({products}) {
    console.log("in pb: ", products)
    const showStats = (e) => {
        e.preventDefault();
        console.log("u cliked")
        const eles = document.getElementsByClassName("dProductStats")
        console.log("ele: ",eles)
        if (document.getElementsByClassName("dProductStats")[0].classList.contains("hidden")) {

            document.getElementsByClassName("dProductStats")[0].classList.remove("hidden")
            document.getElementsByClassName("dProductStats")[0].classList.add("visible")
        } else if (document.getElementsByClassName("dProductStats")[0].classList.contains("visible")) {
            document.getElementsByClassName("dProductStats")[0].classList.remove("visible")
            document.getElementsByClassName("dProductStats")[0].classList.add("hidden")
        }
    }

    return (
        <div className="productBox">
            <div className="dProductDetails">
                <span className="categorySpan">{products.category}</span>
                <hr />
                <div className="details">
                    <div className="leftside">
                        <h5>{products.title}</h5>
                        <h6><span>&#x20B9;</span>{products.price}</h6>
                        <div className="dProductRating">stars - (2000)</div>

                    </div>
                    <div className="rightside">
                        {/* {products.image} */}
                        <img src="/assets/images/me.jpg" alt="" />
                    </div>

                </div>
                <p>{products.description}</p>
            </div>
            <button className="showMoreBtn" onClick={showStats}>Show Stats</button>
            <div className="dProductStats hidden">
                <hr />
                <div className="productStatsWrapper ">
                    <p>id: <span>{products._id}</span></p>
                    <p>supply left:</p>
                    <p>Monthly sales:</p>
                    <p>yearly sales:</p>
                </div>
            </div>
        </div>
    )
}
