import "./rightSideBar.css"

export default function RightSideBar() {

    const closeRightSideBar = () => {
        document.querySelector(".rightSideBar").classList.remove("open")
    }

    return (
        <div className="rightSideBar">
            <div className="close" onClick={closeRightSideBar}>
                close
            </div>
            RightSideBar
        </div>
    )
}
