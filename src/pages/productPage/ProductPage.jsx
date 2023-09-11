import BreadCrums from "../../components/breadCrums/BreadCrums"
import CategoryTopBar from "../../components/categoryTopBar/CategoryTopBar"
import Product from "../../components/product/Product"
import "./productPage.css"

export default function ProductPage() {
    return (
        <div className="productPage">
            <CategoryTopBar />
            <BreadCrums />
            <Product />
        </div>
    )
}
