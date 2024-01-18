// import Footer from "../../components/footer/Footer";
// import Navbar from "../../components/navbar/Navbar";
// import SecondaryNavabar from "../../components/secondaryNavbar/SecondaryNavabar";
import HomeBanner from "../../components/banner/HomeBanner";
import HomeSuggetsProducts from "../../components/homeSuggestProducts/HomeSuggetsProducts";
import RecentProductsContainer from "../../components/recentProductsContainer/RecentProductsContainer";
// import CategoryPage from "../categoryPage/CategoryPage";
// import ProductPage from "../productPage/ProductPage";

// import Cart from "../cart/Cart";

export default function Home() {
    return (
        <div className="mainContainer">
            <div className="mainContent">
                <HomeBanner />
                <RecentProductsContainer />
                <HomeSuggetsProducts />
                
            </div> 

        </div>
    )
}
