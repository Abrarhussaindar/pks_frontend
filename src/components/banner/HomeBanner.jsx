import { useState } from "react"
import "./homeBanner.css"

export default function HomeBanner() {

    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev)=>prev-1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev)=>prev+1)

    }

    const data = [
        "assets/images/banner1.jpg",
        "assets/images/banner2.jpg",
        "assets/images/banner1.jpg",
        // "assets/images/banner2.jpg",
    ]
    return (
        <div className="homeBanner">
            <div className="bannerContainer" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                <img src={data[0]} alt="" />
                <img src={data[1]} alt="" />
                <img src={data[2]} alt="" />
                {/* <img src={data[3]} alt="" /> */}
            </div>
            <div className="icons">
                <div className="icon">
                    <img src="assets/images/left.png" onClick={prevSlide} alt="" />
                </div>
                <div className="icon">
                    <img src="assets/images/right.png" onClick={nextSlide} alt="" />
                </div>
            </div>
        </div>
    )
}
