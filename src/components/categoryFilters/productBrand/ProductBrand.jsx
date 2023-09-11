import "./productBrand.css"

export default function ProductBrand() {
    return (
        <div className="brands">
            <div className="heading">
                <h4>Brands</h4>
            </div>
            <div className="brandContent">
                <ul>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Adidas</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Creature</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>SJeware</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Labnoft</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Nivia</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
