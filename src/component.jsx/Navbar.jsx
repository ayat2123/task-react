import { List } from "./List";
import { LogoNav } from "./LogoNav";
import styles from "./Navbar.module.css";



export function Navbar(){
    return(
        <nav >
            <div className={styles.Navbar}>
              <LogoNav/>
              <List/>  
            </div>
        </nav>
    )
}