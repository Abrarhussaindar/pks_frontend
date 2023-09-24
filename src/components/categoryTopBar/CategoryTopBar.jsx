import "./categoryTopBar.css"
import Li from "../li/Li"



export default function CategoryTopBar({category}) {


    return (
        <div className="categoryTopBarContainer">
            <div className="left">
                <h3>PKS Fashion</h3>
            </div>
            <div className="center">
                {/* <ul> */}
                    {
                        category.map((cate)=>(
                            // console.log("cate: ", cate.subCategories[0].link)
                            // cate.subCategories.forEach(element => {
                                
                                <Li key={cate._id} cate={cate.subCategories}/>
                            // })
                        ))
                    }
                {/* </ul> */}
            </div>
            <div className="right">
                <p>announcement</p>
            </div>
        </div>
    )
}
