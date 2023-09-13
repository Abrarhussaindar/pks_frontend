import "./searchReview.css"

export default function SearchReview() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="searchContainer">
            <img src={PF+"search.png"} alt="" />
            <input type="text" placeholder="Search in reviews, Q&A..." />
        </div>
    )
}
