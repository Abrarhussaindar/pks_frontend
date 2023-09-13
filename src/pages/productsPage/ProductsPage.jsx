import CategoryContent from "../../components/categoryContent/CategoryContent"
import CategoryFilterOptionLeftSideBar from "../../components/categoryFilterOptionLeftSideBar/CategoryFilterOptionLeftSideBar"
import CategoryTopBar from "../../components/categoryTopBar/CategoryTopBar"
import "./productsPage.css"

export default function CategoryPage() {
    return (
        <>
            <div className="categoryContainer">
                <CategoryTopBar />
                <div className="mainContent">
                    <CategoryFilterOptionLeftSideBar />
                    <CategoryContent />
                </div>
            </div>
        </>
    )
}
