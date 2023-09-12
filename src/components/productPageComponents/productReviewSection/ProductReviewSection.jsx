import "./productReviewSection.css"
import ProgressBar from "../../progressBar/ProgressBar"

export default function ProductReviewSection() {
    return (
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
        <hr className="simiHr" />
        <div className="bottom">
            <div className="left">
                <div className="customerReviwes">
                    <div className="heading">
                        <h4>Customer reviews</h4>
                    </div>

                    <ul className="productRating">
                        <li>

                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/star.svg" alt="" />
                            <img src="/assets/images/starOutline.png" alt="" />
                            <span className="numStars">
                                3.8 out of 5
                            </span>
                        </li>
                    </ul>
                    <span className="numRatings">30,000 ratings</span>
                    <div className="ratingProgressBar">
                        <div className="bar">
                            <span>5 Star </span>
                            <ProgressBar progress={60} />
                            <span> 60% </span>
                        </div>
                        <div className="bar"><span>4 Star </span><ProgressBar progress={40} /> <span> 40% </span></div>
                        <div className="bar"><span>3 Star </span><ProgressBar progress={30} /> <span> 30% </span></div>
                        <div className="bar"><span>2 Star </span><ProgressBar progress={20} /> <span> 20% </span></div>
                        <div className="bar"><span>1 Star </span><ProgressBar progress={10} /> <span> 10% </span></div>
                    </div>
                </div>
                <hr className="revHr" />
                <div className="byFeature">
                    <div className="heading">
                        <h4>By feature</h4>
                    </div>
                    <div className="container">
                        <div className="inner">
                            <div className="innerLeft">
                                <p>Comfort</p>
                            </div>
                            <ul className="productRating">
                                <li>

                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/starOutline.png" alt="" />
                                    <span className="numStars">
                                        3.8
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="inner">
                            <div className="innerLeft">
                                <p>Value for money</p>
                            </div>
                            <ul className="productRating">
                                <li>

                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/starOutline.png" alt="" />
                                    <span className="numStars">
                                        3.8
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="inner">
                            <div className="innerLeft">
                                <p>Quality of material</p>
                            </div>
                            <ul className="productRating">
                                <li>

                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/starOutline.png" alt="" />
                                    <span className="numStars">
                                        3.8
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="inner">
                            <div className="innerLeft">
                                <p>Sheerness</p>
                            </div>
                            <ul className="productRating">
                                <li>

                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/star.svg" alt="" />
                                    <img src="/assets/images/starOutline.png" alt="" />
                                    <span className="numStars">
                                        3.8
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="revHr" />
                <div className="reviewThisProduct">
                    <div className="heading">
                        <h4>Review this product</h4>
                    </div>
                    <div className="container">
                        <p>Share your thoughts with other customers</p>
                        <button>Write a product review</button>
                    </div>
                </div>
                <hr className="revHr" />
            </div>
            <div className="right">
                <div className="rigthTop">
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
                <hr className="rigHr" />
                <div className="rightCenter">
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
                        <div className="inner">
                            <p>price range</p>
                        </div>
                        <div className="inner">
                            <p>pure cotton</p>
                        </div>
                    </div>
                </div>
                <hr className="rigHr" />
                <div className="rightBottom">
                    <div className="heading">
                        <h4>
                            Top reviews from India
                        </h4>
                    </div>
                    <div className="container">

                        <div className="inner">
                            <div className="head">
                                <div className="customer">

                                    <img src="assets/images/me.jpg " width="20px" alt="" />
                                    <span className="nameSpan">Abrar Hussain</span>
                                </div>
                                <div className="rating">
                                    <ul className="productRating">
                                        <li>
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/starOutline.png" alt="" />
                                            <span className="numStars"> - Worth Buying</span>
                                        </li>
                                    </ul>
                                    <div className="ratingDate">
                                        <p>Reviewed in India on <span className="dateSpan">6 September 2023</span> </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="ratHr" />
                            <div className="productDetails">
                                <div className="size">
                                    Size: <span className="proSpan">L</span>
                                </div>
                                <div className="color">
                                    Colour: <span className="proSpan">Black</span>
                                </div>
                                <div className="verified">
                                    <span className="proSpan">Verified Purchase</span>
                                </div>
                            </div>
                            <div className="reviewDescription">
                                <p>Overall good product but the thickness of the cloth is questionable....It doesn't last longer but yup for this price range Not bad...It will Last For 4-5 months definitely...</p>
                            </div>
                            <div className="btns">
                                <button className="helpBtn">Helpful</button>
                                <button className="repBtn">Report</button>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="head">
                                <div className="customer">

                                    <img src="assets/images/me.jpg " width="20px" alt="" />
                                    <span className="nameSpan">Abrar Hussain</span>
                                </div>
                                <div className="rating">
                                    <ul className="productRating">
                                        <li>
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/starOutline.png" alt="" />
                                            <span className="numStars"> - Worth Buying</span>
                                        </li>
                                    </ul>
                                    <div className="ratingDate">
                                        <p>Reviewed in India on <span className="dateSpan">6 September 2023</span> </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="ratHr" />
                            <div className="productDetails">
                                <div className="size">
                                    Size: <span className="proSpan">L</span>
                                </div>
                                <div className="color">
                                    Colour: <span className="proSpan">Black</span>
                                </div>
                                <div className="verified">
                                    <span className="proSpan">Verified Purchase</span>
                                </div>
                            </div>
                            <div className="reviewDescription">
                                <p>Overall good product but the thickness of the cloth is questionable....It doesn't last longer but yup for this price range Not bad...It will Last For 4-5 months definitely...</p>
                            </div>
                            <div className="btns">
                                <button className="helpBtn">Helpful</button>
                                <button className="repBtn">Report</button>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="head">
                                <div className="customer">

                                    <img src="assets/images/me.jpg " width="20px" alt="" />
                                    <span className="nameSpan">Abrar Hussain</span>
                                </div>
                                <div className="rating">
                                    <ul className="productRating">
                                        <li>
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/starOutline.png" alt="" />
                                            <span className="numStars"> - Worth Buying</span>
                                        </li>
                                    </ul>
                                    <div className="ratingDate">
                                        <p>Reviewed in India on <span className="dateSpan">6 September 2023</span> </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="ratHr" />
                            <div className="productDetails">
                                <div className="size">
                                    Size: <span className="proSpan">L</span>
                                </div>
                                <div className="color">
                                    Colour: <span className="proSpan">Black</span>
                                </div>
                                <div className="verified">
                                    <span className="proSpan">Verified Purchase</span>
                                </div>
                            </div>
                            <div className="reviewDescription">
                                <p>Overall good product but the thickness of the cloth is questionable....It doesn't last longer but yup for this price range Not bad...It will Last For 4-5 months definitely...</p>
                            </div>
                            <div className="btns">
                                <button className="helpBtn">Helpful</button>
                                <button className="repBtn">Report</button>
                            </div>
                        </div>
                        <div className="inner">
                            <div className="head">
                                <div className="customer">

                                    <img src="assets/images/me.jpg " width="20px" alt="" />
                                    <span className="nameSpan">Abrar Hussain</span>
                                </div>
                                <div className="rating">
                                    <ul className="productRating">
                                        <li>
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/star.svg" alt="" />
                                            <img src="/assets/images/starOutline.png" alt="" />
                                            <span className="numStars"> - Worth Buying</span>
                                        </li>
                                    </ul>
                                    <div className="ratingDate">
                                        <p>Reviewed in India on <span className="dateSpan">6 September 2023</span> </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="ratHr" />
                            <div className="productDetails">
                                <div className="size">
                                    Size: <span className="proSpan">L</span>
                                </div>
                                <div className="color">
                                    Colour: <span className="proSpan">Black</span>
                                </div>
                                <div className="verified">
                                    <span className="proSpan">Verified Purchase</span>
                                </div>
                            </div>
                            <div className="reviewDescription">
                                <p>Overall good product but the thickness of the cloth is questionable....It doesn't last longer but yup for this price range Not bad...It will Last For 4-5 months definitely...</p>
                            </div>
                            <div className="btns">
                                <button className="helpBtn">Helpful</button>
                                <button className="repBtn">Report</button>
                            </div>
                        </div>

                    </div>

                </div>
                <hr className="hrBtm"/>
            </div>
        </div>
    </div>
    )
}
