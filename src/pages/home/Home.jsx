import HomeBanner from "../../components/banner/HomeBanner";
import Footer from "../../components/footer/Footer";
import HomeSuggetsProducts from "../../components/homeSuggestProducts/HomeSuggetsProducts";
import Navbar from "../../components/navbar/Navbar";
import RecentProductsContainer from "../../components/recentProductsContainer/RecentProductsContainer";

export default function Home() {
    return (
        <>
            <Navbar />
            <div className="mainContent">
                <HomeBanner />
                <RecentProductsContainer />
                <HomeSuggetsProducts />
                <HomeSuggetsProducts />
                <HomeSuggetsProducts />
            </div>
            <Footer />
        </>
    )
}
