import CategoryContent from "../../components/categoryContent/CategoryContent"
import CategoryFilterOptionLeftSideBar from "../../components/categoryFilterOptionLeftSideBar/CategoryFilterOptionLeftSideBar"
import CategoryTopBar from "../../components/categoryTopBar/CategoryTopBar"
import "./categoryPage.css"

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SecondaryNavabar from "../../components/secondaryNavbar/SecondaryNavabar";

export default function CategoryPage() {
    return (
        <>
            <Navbar />
            <SecondaryNavabar />
            <div className="categoryContainer">
                <CategoryTopBar />
                <div className="mainContent">
                    <CategoryFilterOptionLeftSideBar />
                    <CategoryContent />
                </div>
            </div>
            <Footer />
        </>
    )
}
