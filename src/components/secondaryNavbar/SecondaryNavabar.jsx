import { Link } from "react-router-dom";
import "./secondaryNavbar.css";

export default function SecondaryNavabar() {
    return (
        <div className="secondaryNavbarContainer">
            <Link to=".">
                <img src="/assets/images/cate_imgs/man.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/woman.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/kids.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/phone.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/electronics.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/sports.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/toys.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/grocery.png" alt="" />
            </Link>
            <Link to=".">
                <img src="/assets/images/cate_imgs/beauty.png" alt="" />
            </Link>
        </div>
    );
}
