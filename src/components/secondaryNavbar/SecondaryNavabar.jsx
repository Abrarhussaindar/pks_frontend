import { Link } from "react-router-dom";
import "./secondaryNavbar.css";

export default function SecondaryNavabar() {

    
    return (
        <div className="secondaryNavbarContainer">
            <div className="container">

                <Link to="/products/mens">
                    <img src="/assets/images/cate_imgs/man.png" alt="" />
                    <span className="cate">Men's</span>
                </Link>
            </div>
            <div className="container">
                <Link to="/products/womens">
                    <img src="/assets/images/cate_imgs/woman.png" alt="" />
                    <span className="cate">Women's</span>
                </Link>

            </div>
            <div className="container">
                <Link to="/products/kids">
                    <img src="/assets/images/cate_imgs/kids.png" alt="" />
                    <span className="cate">Kids</span>
                </Link>

            </div>
            <div className="container">

                <Link to="/products/mobiles">
                    <img src="/assets/images/cate_imgs/phone.png" alt="" />
                    <span className="cate">Mobiles</span>
                </Link>
            </div>
            <div className="container">

                <Link to="/products/electronics">
                    <img src="/assets/images/cate_imgs/electronics.png" alt="" />
                    <span className="cate">Electronics</span>
                </Link>
            </div>
            <div className="container">
                <Link to="/products/sports">
                    <img src="/assets/images/cate_imgs/sports.png" alt="" />
                    <span className="cate">Sports</span>
                </Link>

            </div>
            <div className="container">

                <Link to="/products/toys">
                    <img src="/assets/images/cate_imgs/toys.png" alt="" />
                    <span className="cate">Toys</span>
                </Link>
            </div>
            <div className="container">

                <Link to="/products/grocery">
                    <img src="/assets/images/cate_imgs/grocery.png" alt="" />
                    <span className="cate">Grocery</span>
                </Link>
            </div>
            <div className="container">

                <Link to="/products/beauty">
                    <img src="/assets/images/cate_imgs/beauty.png" alt="" />
                    <span className="cate">Beauty</span>
                </Link>
            </div>
        </div>
    );
}

