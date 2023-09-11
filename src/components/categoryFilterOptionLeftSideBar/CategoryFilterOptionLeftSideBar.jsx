import ProductBrand from "../categoryFilters/productBrand/ProductBrand"
import ProductColor from "../categoryFilters/productColor/ProductColor"
import ProductDiscount from "../categoryFilters/productDiscount/ProductDiscount"
import ProductMaterial from "../categoryFilters/productMaterial/ProductMaterial"
import ProductPattern from "../categoryFilters/productPattern/ProductPattern"
import ProductPrice from "../categoryFilters/productPrice/ProductPrice"
import ProductRating from "../categoryFilters/productRating/ProductRating"
import ProductSize from "../categoryFilters/productSize/ProductSize"
import "./categoryFilterOptionLeftSideBar.css"

export default function CategoryFilterOptionLeftSideBar() {
    return (
        <div className="leftSideBarContainer">
            
            <ProductSize />
            <ProductColor />
            <ProductPattern />
            <ProductBrand />
            <ProductMaterial />
            <ProductPrice />
            <ProductRating />
            <ProductDiscount />
            
        </div>
    )
}
