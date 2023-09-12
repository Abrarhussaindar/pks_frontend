// import Footer from "../../components/footer/Footer";
// import Navbar from "../../components/navbar/Navbar";
// import HomeBanner from "../../components/banner/HomeBanner";
// import HomeSuggetsProducts from "../../components/homeSuggestProducts/HomeSuggetsProducts";
// import RecentProductsContainer from "../../components/recentProductsContainer/RecentProductsContainer";
// import SecondaryNavabar from "../../components/secondaryNavbar/SecondaryNavabar";
// import CategoryPage from "../categoryPage/CategoryPage";
import ProductPage from "../productPage/ProductPage";

export default function Home() {
    return (
        <div className="mainContainer">
            {/* <Navbar /> */}
            {/* <SecondaryNavabar /> */}
            
            {/* <div className="mainContent">
                <HomeBanner />
                <RecentProductsContainer />
                <HomeSuggetsProducts />
                <HomeSuggetsProducts />
                <HomeSuggetsProducts />
            </div> */}
            
            {/* <CategoryPage /> */}
            <ProductPage />
            {/* <Footer /> */}
        </div>
    )
}
