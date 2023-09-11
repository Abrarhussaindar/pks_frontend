import "./footer.css"

export default function Footer() {
    return (
        <div className="footerContainer">
            <div className="top">
                <div className="left">
                    <h1>Panun<span>Keshur</span> Store</h1>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    
                </div>
                <div className="center">
                    <h3>Important Links</h3>
                    <ul>

                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Services</li>
                        <li>dummy</li>
                        <li>dummy</li>
                    </ul>
                </div>
                <div className="center">
                    <h3>Other Links</h3>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                        <li>Terms & Conditions</li>
                        <li>Index</li>
                        <li>Return & Refund Policy</li>
                    </ul>
                </div>
                <div className="right">
                    <div className="rightTop">
                        <h3>Follow Us</h3>
                        <div className="socialContainer">
                            <a href="#">
                            <img src="/assets/images/socials/twitter.png" alt="" />

                            </a>
                            <a href="#">
                            <img src="/assets/images/socials/facebook.png" alt="" />

                            </a>
                            <a href="#">
                            <img src="/assets/images/socials/youtube.png" alt="" />

                            </a>
                            <a href="#">
                            <img src="/assets/images/socials/instagram.png" alt="" />

                            </a>
                            
                        </div>
                    </div>
                    <div className="rightBottom">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="tel:+91-8825066730"><span><img src="/assets/images/footer_imgs/phone.png" alt="" /></span>+91-8825066730</a></li>
                            <li><a href="tel:+91-6006045264"><span><img src="/assets/images/footer_imgs/phone.png" alt="" /></span>+91-6006045264</a></li>
                            <li><a href="#"><span><img src="/assets/images/footer_imgs/email.png" alt="" /></span>ali988651@gmail.com</a></li>
                            <li><a href="https://pkstesting.netlify.app/"><span><img src="/assets/images/footer_imgs/global.png" alt="" /></span>www.pkstesting.netlify.app</a></li>
                            <li><a href="#"><span><img src="/assets/images/footer_imgs/pin.png" alt="" /></span>Near Mir Shams-U-Din Araki Asstan, Zadibal, Srinagar, 190011</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <p>© 2021 PanunKeshurStore. All rights reserved.</p>
            </div>
        </div>
    )
}
