import "./categoryTopBar.css"

export default function CategoryTopBar() {
    return (
        <div className="categoryTopBarContainer">
            <div className="left">
                <h3>PKS Fashion</h3>
            </div>
            <div className="center">
                <ul>
                    <li>Shirts</li>
                    <li>Jeans</li>
                    <li>Inner Wear</li>
                    <li>Sports Wear</li>
                    <li>T-Shirts</li>
                    <li>Trousers</li>
                    <li>Winter Wear</li>
                </ul>
            </div>
            <div className="right">
                <p>announcement</p>
            </div>
        </div>
    )
}
