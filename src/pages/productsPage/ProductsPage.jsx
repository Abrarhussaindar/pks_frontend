import { useLocation } from "react-router-dom"
import CategoryContent from "../../components/categoryContent/CategoryContent"
import CategoryFilterOptionLeftSideBar from "../../components/categoryFilterOptionLeftSideBar/CategoryFilterOptionLeftSideBar"
import CategoryTopBar from "../../components/categoryTopBar/CategoryTopBar"
import "./productsPage.css"
import { useEffect, useState } from "react"
import axios from "../../api/axios"

export default function CategoryPage() {

    const openLeftSideBar = () => {}
    const openRightSideBar = () => {}
    const location = useLocation();
    const cate = location.pathname.split("/")[2]
    const [category, setCategory] = useState([])
    useEffect(()=>{
        let isMounted = true
        const controller = new AbortController();
        
        const getCategory = async () => {
            try{
                const res = await axios.get(`/category/${cate}`,{
                    signal: controller.signal
                });
                isMounted && setCategory(res.data)
            }catch(err){
                console.log(err)
            }
        };
        getCategory();

        return ()=>{
            isMounted = false;
            controller.abort();
        }
    },[cate])
    return (
        <>

            <div className="categoryContainer">
                <CategoryTopBar category={category}/>
                <div className="toggleBtns">
                    <img onClick={openLeftSideBar} src="/assets/images/filter.png" alt="" />
                    <img onClick={openRightSideBar} src="/assets/images/category-options.png" alt="" />
                </div>
                <div className="mainContent">
                    <CategoryFilterOptionLeftSideBar />
                    {
                        category.map((cate)=>(
                            <CategoryContent key={cate._id} cate={cate} subCate={cate.subCategories}/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}
