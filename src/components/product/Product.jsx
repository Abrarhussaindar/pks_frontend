import ProductColor from "../categoryFilters/productColor/ProductColor"
import ProductSize from "../categoryFilters/productSize/ProductSize"
import Offers from "../offerContainer/Offers"
import PinCode from "../pinCodeContainer/PinCode"

import BrandSection from "../productPageComponents/brandSection/BrandSection"
import Buttons from "../productPageComponents/buttons/Buttons"
import ProductAbout from "../productPageComponents/productAboutContainer/ProductAbout"
import ProductDescription from "../productPageComponents/productDescripton/ProductDescription"
import ProductDetails from "../productPageComponents/productDetailsSection/ProductDetails"
import ProductImage from "../productPageComponents/productImageContainer/ProductImage"
// import ProductManufacturer from "../productPageComponents/productManufacturer/ProductManufacturer"
import ProductNameDescription from "../productPageComponents/productNameDescriptionContainer/ProductNameDescription"
import ProductPrice from "../productPageComponents/productPriceContainer/ProductPrice"
import ProductRating from "../productPageComponents/productRating/ProductRating"
import ProductReviewSection from "../productPageComponents/productReviewSection/ProductReviewSection"
import ProductStock from "../productPageComponents/productStockContainer/ProductStock"
import ProductTable from "../productPageComponents/productTableContainer/ProductTable"
import SimilarProducts from "../productPageComponents/similarProductsSection/SimilarProducts"
import Services from "../serviceContainer/Services"

import "./product.css"

export default function Product() {
    return (
        <div className="productContainer">
            <div className="mainSection">
                <div className="left">
                    <ProductImage />
                </div>
                <div className="right">
                    <ProductNameDescription />
                    <ProductRating />
                    <hr />
                    <ProductPrice />
                    <ProductStock />
                    <PinCode />
                    <Buttons />
                    <hr />
                    <Offers />
                    <hr />
                    <Services />
                    <hr />
                    <div className="aboutItemContainer">
                        <div className="productColor">
                            <ProductColor />
                        </div>
                        <hr />
                        <div className="productSize">
                            <ProductSize />
                        </div>
                        <hr />
                        <ProductTable />
                        <hr />
                        <ProductAbout />
                    </div>
                </div>
            </div>
            <BrandSection />
            <hr className="simiHr" />
            <SimilarProducts />
            <hr className="simiHr" />
            <ProductDetails />
            <hr className="simiHr" />
            <ProductDescription />
            <hr className="simiHr" />
            {/* <ProductManufacturer /> */}
            <p>pending</p>
            <hr className="simiHr" />
            <ProductReviewSection />
        </div>
    )
}
