import HomeBanner from "../../components/banner/HomeBanner";
import Footer from "../../components/footer/Footer";
import HomeSuggetsProducts from "../../components/homeSuggestProducts/HomeSuggetsProducts";
import Navbar from "../../components/navbar/Navbar";
import RecentProductsContainer from "../../components/recentProductsContainer/RecentProductsContainer";
import SecondaryNavabar from "../../components/secondaryNavbar/SecondaryNavabar";
import CategoryPage from "../categoryPage/CategoryPage";

export default function Home() {
    return (
        <div className="mainContainer">
            <Navbar />
            <SecondaryNavabar />
            
            
            {/* <div className="mainContent">
                <HomeBanner />
                <RecentProductsContainer />
                <HomeSuggetsProducts />
                <HomeSuggetsProducts />
                <HomeSuggetsProducts />
            </div> */}
            
            <CategoryPage />
            <Footer />
        </div>
    )
}
