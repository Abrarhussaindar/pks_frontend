import CategoryContent from "../../components/categoryContent/CategoryContent"
import CategoryFilterOptionLeftSideBar from "../../components/categoryFilterOptionLeftSideBar/CategoryFilterOptionLeftSideBar"
import CategoryTopBar from "../../components/categoryTopBar/CategoryTopBar"
import "./productsPage.css"

export default function CategoryPage() {

    const openLeftSideBar = () => {}
    const openRightSideBar = () => {}
    
    return (
        <>
            <div className="categoryContainer">
                <CategoryTopBar />
                <div className="toggleBtns">
                    <img onClick={openLeftSideBar} src="/assets/images/filter.png" alt="" />
                    <img onClick={openRightSideBar} src="/assets/images/category-options.png" alt="" />
                </div>
                <div className="mainContent">
                    <CategoryFilterOptionLeftSideBar />
                    <CategoryContent />
                </div>

            </div>
        </>
    )
}
