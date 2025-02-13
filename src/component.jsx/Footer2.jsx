import facebook from"../assets/facebook.png";
import twiter from"../assets/twiter.png";
import instagram from"../assets/instagram.png";
export function Footer2(){
    return(
        <div>
            <div>
                <ul>
                    <li><a href="">Terms of Service</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Cookie Policy</a></li>
                </ul>
            </div>
            <div>
                <img src={facebook} />
                <img src={twiter} />
                <img src={instagram} />
            </div>
            <div>
                <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
            </div>
        </div>


    )
}