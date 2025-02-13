import Logo from"../assets/Logo.png";
import styles from "./LogoNav.module.css"
export function LogoNav(){
    return(
            <img className={styles.Logo} src={Logo}/>

    )
}