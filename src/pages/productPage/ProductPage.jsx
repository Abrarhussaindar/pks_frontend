import BreadCrums from "../../components/breadCrums/BreadCrums"
import CategoryTopBar from "../../components/categoryTopBar/CategoryTopBar"
import Product from "../../components/product/Product"
import "./productPage.css"

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SecondaryNavabar from "../../components/secondaryNavbar/SecondaryNavabar";

export default function ProductPage() {
    return (
        <>
            <Navbar />
            <SecondaryNavabar />
            <div className="productPage">
                <CategoryTopBar />
                <BreadCrums />
                <Product />
            </div>
            <Footer />
        </>
    )
}
