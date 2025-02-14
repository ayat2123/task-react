import email from "../assets/email.png"
import tel from "../assets/tel.png"
import location from "../assets/location.png"
import styles from "./Footer1.module.css"
import Logo from "../assets/Logo.png"
export function Footer1(){
    return(
        <div className={styles.Footer1}>
            <div>
               <img  className={styles.logo} src={Logo} alt="" />
                <p className={styles.p}>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                <div className={styles.spanbox}>
                   <img className={styles.img} src={email} />
                    <span className={styles.span}>  hello@littlelearners.com</span>
                </div>
                <div className={styles.spanbox}>
                    <img className={styles.img} src={tel} />
                    <span className={styles.span}> +91 91813 23 2309</span>
                </div>
                <div className={styles.spanbox}>
                    <img className={styles.img} src={location} />
                    <span className={styles.span}> Somewhere in the World</span>
                </div>
            </div>
            <div>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Features</a></li>
                    <li><a href="">Our Testimonials</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">Our Vission</a></li>
                    <li><a href="">Awards and Recognitions</a></li>
                    <li><a href="">History</a></li>
                    <li><a href="">Teachers</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="">Academics</a></li>
                    <li><a href="">Special Features</a></li>
                    <li><a href="">Gallery</a></li>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Information</a></li>
                    <li><a href="">Map & Direction</a></li>
                </ul>
            </div>
        </div>
    )
}