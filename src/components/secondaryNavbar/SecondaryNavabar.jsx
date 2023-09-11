import { Link } from "react-router-dom";
import "./secondaryNavbar.css";

export default function SecondaryNavabar() {
    return (
        <div className="secondaryNavbarContainer">
            <div className="container">

                <Link to=".">
                    <img src="/assets/images/cate_imgs/man.png" alt="" />
                    <span>Men's</span>
                </Link>
            </div>
            <div className="container">
                <Link to=".">
                    <img src="/assets/images/cate_imgs/woman.png" alt="" />
                    <span>Women's</span>
                </Link>

            </div>
            <div className="container">
                <Link to=".">
                    <img src="/assets/images/cate_imgs/kids.png" alt="" />
                    <span>Kids</span>
                </Link>

            </div>
            <div className="container">

                <Link to=".">
                    <img src="/assets/images/cate_imgs/phone.png" alt="" />
                    <span>Mobiles</span>
                </Link>
            </div>
            <div className="container">

                <Link to=".">
                    <img src="/assets/images/cate_imgs/electronics.png" alt="" />
                    <span>Electronics</span>
                </Link>
            </div>
            <div className="container">
                <Link to=".">
                    <img src="/assets/images/cate_imgs/sports.png" alt="" />
                    <span>Sports</span>
                </Link>

            </div>
            <div className="container">

                <Link to=".">
                    <img src="/assets/images/cate_imgs/toys.png" alt="" />
                    <span>Toys</span>
                </Link>
            </div>
            <div className="container">

                <Link to=".">
                    <img src="/assets/images/cate_imgs/grocery.png" alt="" />
                    <span>Grocery</span>
                </Link>
            </div>
            <div className="container">

                <Link to=".">
                    <img src="/assets/images/cate_imgs/beauty.png" alt="" />
                    <span>Beauty</span>
                </Link>
            </div>
        </div>
    );
}

