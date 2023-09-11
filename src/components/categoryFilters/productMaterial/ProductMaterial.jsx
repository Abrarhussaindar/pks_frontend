import "./productMaterial.css"

export default function ProductMaterial() {
    return (
        <div className="material">
            <div className="heading">
                <h4>Material</h4>
            </div>
            <div className="materialContent">
                <ul>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Cotton</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Denim</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Leather</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Rayon</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Silk</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Synthetic</span>
                        </div>
                    </li>
                    <li>
                        <div className="radiobtnContainer">
                            <label htmlFor="checkbox1">

                                <input type="checkbox" id="checkbox1" />
                            </label>
                            <span>Wool</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}
