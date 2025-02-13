import { Headerleft } from "./Headerleft";
import { Headerright } from "./Headerright";
import styles from "./Header.module.css"
export function Header(){
    return(
        <header>
            <div className={styles.Header}>
                <Headerleft/>
                <Headerright/>
            </div>
        </header>
    )
}