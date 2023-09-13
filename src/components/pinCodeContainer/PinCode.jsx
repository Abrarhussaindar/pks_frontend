import "./pinCode.css"

export default function PinCode() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className="pincodeContainer">
            <img src={PF+"pin.png"} alt="" />
            <p>Deliver to <span>name</span> - <span>address</span></p>
        </div>
    )
}
